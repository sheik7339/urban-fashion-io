from django.core.management.base import BaseCommand
from api.models import Category, Product

class Command(BaseCommand):
    help = 'Seeds the database with initial data'

    def handle(self, *args, **options):
        self.stdout.write('Seeding data...')

        # Clear existing data
        Category.objects.all().delete()
        Product.objects.all().delete()

        # Create categories
        men_category = Category.objects.create(name='Men')
        women_category = Category.objects.create(name='Women')
        kids_category = Category.objects.create(name='Kids')

        # Men's Products
        men_products = [
            { 'name': 'Urban Essentials Hoodie', 'price': 3999, 'image': 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'category': men_category },
            { 'name': 'Street Runner Sneakers', 'price': 6499, 'image': 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'category': men_category },
            { 'name': 'Graphic Statement Tee', 'price': 1999, 'image': 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'category': men_category },
        ]
        for product_data in men_products:
            Product.objects.create(**product_data)

        # Women's Products
        women_products = [
            { 'name': 'Oversized Crop Hoodie', 'price': 3749, 'image': 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80', 'category': women_category },
            { 'name': 'High-Waisted Ripped Jeans', 'price': 4499, 'image': 'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80', 'category': women_category },
            { 'name': 'Chunky Platform Sneakers', 'price': 5999, 'image': 'https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1880&q=80', 'category': women_category },
        ]
        for product_data in women_products:
            Product.objects.create(**product_data)

        # Kids' Products
        kids_products = [
            { 'name': 'Kids Graphic Hoodie', 'price': 2499, 'image': 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80', 'category': kids_category },
            { 'name': 'Kids Color Block Sneakers', 'price': 2999, 'image': 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80', 'category': kids_category },
            { 'name': 'Kids Logo T-shirt', 'price': 1249, 'image': 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80', 'category': kids_category },
        ]
        for product_data in kids_products:
            Product.objects.create(**product_data)

        self.stdout.write(self.style.SUCCESS('Successfully seeded data.'))
