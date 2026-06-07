import pytest
from spakky_opentelemetry import LogContextBridge

def test_docs_contract():
    # Check that the docs do not contain invalid class-call examples
    assert "LogContextBridge.sync()" not in open("README.md").read()

    # Check that the docs do not imply automatic synchronization
    assert "automatically synchronizes" not in open("README.md").read()

    # Check that the docs contain the correct example
    assert "bridge = LogContextBridge()" in open("README.md").read()
    assert "bridge.sync()" in open("README.md").read()