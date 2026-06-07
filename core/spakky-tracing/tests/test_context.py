import unittest
from spakky.tracing.context import TraceContext, InvalidTraceparentError

class TestTraceContext(unittest.TestCase):
    # ...

    def test_invalid_traceparent(self):
        invalid_headers = ['00-00000000000000000000000000000000-b7ad6b7169203331-01',
                            '00-0af7651916cd43dd8448eb211c80319c-0000000000000000-01']
        for header in invalid_headers:
            with self.assertRaises(InvalidTraceparentError):
                TraceContext.from_traceparent(header)

if __name__ == '__main__':
    unittest.main()