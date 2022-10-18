from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.response import Response
from django.contrib.contenttypes.models import ContentType


from .models import Produtos
from .serializers import ProdutosSerializer
# Create your views here.


class ProdutoViewSet(viewsets.ModelViewSet):
    model = Produtos
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer

    def get_queryset(self):
        ordenacao = self.request.query_params.get('ordenacao', None)
        ordenacao_reversa = self.request.query_params.get('ordenacao_reversa', None)
        preco_inicio = self.request.query_params.get('preco_inicio', None)
        status = self.request.query_params.get('status', None)
        preco_fim = self.request.query_params.get('preco_fim', None)

        queryset = Produtos.objects.all()

        if status:
            queryset = queryset.filter(status=status)
        if preco_inicio and preco_fim:
            queryset = queryset.filter(preco__range=[preco_inicio, preco_fim]) 
        if ordenacao:
            if ordenacao.lower() == "true":
                queryset = queryset.order_by('nome','preco')

        if ordenacao_reversa:
            if ordenacao_reversa.lower() == "true":
                queryset = queryset.order_by('-nome','-preco')

        return queryset

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=400)

        return Response({'message': 'Produto criado com sucesso!'})

    def partial_update(self, request, pk=None):
        try:
            produto = Produtos.objects.get(id_produto=int(pk))
        except Exception as e:
            print(e)
            return Response(status=404)

        serializer = self.serializer_class(
            produto, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=400)

        return Response({'message': 'Produto atualizado com sucesso!'})

    def destroy(self, request, pk=None):
        produto = Produtos.objects.get(
            id_produto=int(pk))
        produto.delete()

        return Response({'message': 'Produto removido com sucesso'})
