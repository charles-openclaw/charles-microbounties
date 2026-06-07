from spakky.tracing.exceptions import InvalidTraceparentError

# Define constants for invalid all-zero values
INVALID_TRACE_ID = '00000000000000000000000000000000'
INVALID_SPAN_ID = '0000000000000000'

class TraceContext:
    # ...

    @classmethod
    def from_traceparent(cls, traceparent):
        # ...
        trace_id, span_id, sample_flag = parts
        if trace_id == INVALID_TRACE_ID or span_id == INVALID_SPAN_ID:
            raise InvalidTraceparentError("Invalid traceparent: all-zero trace_id or span_id")
        # ...