"""_summary_

Returns:
    _type_: _description_
""""""
ASGI config for urbanfashion project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'urbanfashion.settings')

application = get_asgi_application()
