from django.db import models

# Create your models here.

class Produtos(models.Model):
    id_produto = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=100,null=True)
    preco = models.FloatField(null=True)
    descricao = models.CharField(max_length=100,null=True)
    status = models.CharField(max_length=10,null=True)
    imagem = models.URLField(max_length=200, null=True, blank=True)
    class Meta:
        ordering = ['nome']
        db_table = 'nome'
        verbose_name_plural = 'Produtos'

    def __str__(self):
        return self.nome