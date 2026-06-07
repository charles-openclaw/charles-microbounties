from google.protobuf import descriptor_pb2
from spakky.plugins.grpc.decorators.rpc import RpcMethodType

def build_method_descriptor(service_name: str, method_name: str, method_type: RpcMethodType, request_type: str, response_type: str) -> descriptor_pb2.MethodDescriptorProto:
    method_descriptor = descriptor_pb2.MethodDescriptorProto(
        name=method_name,
        input_type=request_type,
        output_type=response_type,
        options=descriptor_pb2.MethodOptions()
    )

    if method_type == RpcMethodType.SERVER_STREAMING:
        method_descriptor.options.stream = True
        method_descriptor.client_streaming = False
        method_descriptor.server_streaming = True
    elif method_type == RpcMethodType.CLIENT_STREAMING:
        method_descriptor.options.stream = True
        method_descriptor.client_streaming = True
        method_descriptor.server_streaming = False
    elif method_type == RpcMethodType.BIDI_STREAMING:
        method_descriptor.options.stream = True
        method_descriptor.client_streaming = True
        method_descriptor.server_streaming = True
    else:
        method_descriptor.options.stream = False
        method_descriptor.client_streaming = False
        method_descriptor.server_streaming = False

    return method_descriptor