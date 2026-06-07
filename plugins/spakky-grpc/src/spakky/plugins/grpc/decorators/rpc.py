from typing import AsyncIterator, Type
from spakky.plugins.grpc import types

def unwrap_streaming_type_hint(type_hint: Type) -> Type:
    """Unwrap streaming type hints to the underlying message type."""
    if hasattr(type_hint, '__origin__') and type_hint.__origin__ == AsyncIterator:
        return type_hint.__args__[0]
    return type_hint

def get_rpc_method_types(rpc_method: callable) -> tuple:
    """Get the request and response types for an RPC method."""
    method_type = getattr(rpc_method, '_rpc_method_type', None)
    if method_type == types.MethodType.SERVER_STREAMING:
        request_type = rpc_method.__annotations__['request']
        response_type = unwrap_streaming_type_hint(rpc_method.__annotations__['return'])
    elif method_type == types.MethodType.CLIENT_STREAMING:
        request_type = unwrap_streaming_type_hint(rpc_method.__annotations__['request'])
        response_type = rpc_method.__annotations__['return']
    elif method_type == types.MethodType.BIDI_STREAMING:
        request_type = unwrap_streaming_type_hint(rpc_method.__annotations__['request'])
        response_type = unwrap_streaming_type_hint(rpc_method.__annotations__['return'])
    else:
        request_type = rpc_method.__annotations__['request']
        response_type = rpc_method.__annotations__['return']
    return request_type, response_type