from spakky.tracing.context import TraceContext, InvalidTraceparentError

class W3CTracePropagator:
    # ...

    @classmethod
    def extract(cls, headers):
        # ...
        for header in headers.get('traceparent', []):
            try:
                trace_context = TraceContext.from_traceparent(header)
                # ...
            except InvalidTraceparentError:
                # Fail closed and return None for invalid headers
                return None
        # ...