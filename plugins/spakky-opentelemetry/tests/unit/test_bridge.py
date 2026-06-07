import pytest
from spakky_opentelemetry import LogContextBridge

def test_bridge_sync():
    # Create a LogContextBridge instance
    bridge = LogContextBridge()

    # Call the sync method on the bridge instance
    bridge.sync()

    # Check that the sync method does not raise any errors
    assert True