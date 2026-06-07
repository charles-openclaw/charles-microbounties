import inspect
from fastapi import FastAPI
from fastapi.routing import APIRoute
from spakky import Spakky

def is_async_handler(handler):
    """Check if a handler is async."""
    return inspect.iscoroutinefunction(handler)

async def async_handler_wrapper(handler, *args, **kwargs):
    """Wrapper for async handlers."""
    return await handler(*args, **kwargs)

def sync_handler_wrapper(handler, *args, **kwargs):
    """Wrapper for sync handlers."""
    return handler(*args, **kwargs)

def create_route_handler(handler):
    """Create a route handler based on the handler type."""
    if is_async_handler(handler):
        return async_handler_wrapper
    else:
        return sync_handler_wrapper

class SpakkyFastAPI(Spakky):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fastapi_app = FastAPI()

    def register_routes(self):
        """Register routes with the FastAPI app."""
        for route in self.routes:
            handler = create_route_handler(route.handler)
            self.fastapi_app.add_api_route(
                path=route.path,
                endpoint=handler,
                methods=route.methods,
                name=route.name,
                dependencies=route.dependencies,
                description=route.description,
                status_code=route.status_code,
            )