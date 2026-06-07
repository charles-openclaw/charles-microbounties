try:
    import httpx
except ImportError:
    raise ImportError("httpx is required for the Replicate connector. Please install it with `pip install httpx` or add it to your project's dependencies.")