from django.db import models

# Create your models here.

class Produtos(models.Model):
    id_produto = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=100)
    preco = models.FloatField()
    descricao = models.CharField(max_length=100)
    status = models.CharField(max_length=10)

    class Meta:
        ordering = ['nome']
        db_table = 'nome'
        verbose_name_plural = 'Produtos'

    def __str__(self):
        return self.nome