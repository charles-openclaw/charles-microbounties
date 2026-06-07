import pytest
from spakky_fastapi import ActuatorConfig

def test_actuator_docs_contract():
    # Verify that the actuator guide includes the warning about unauthenticated public HTTP routes
    with open('plugins/spakky-fastapi/README.md', 'r') as f:
        readme_content = f.read()
    assert 'unauthenticated public HTTP routes by default' in readme_content

    # Verify that the actuator guide includes the production hardening guidance
    with open('plugins/spakky-fastapi/docs/actuator.md', 'r') as f:
        actuator_content = f.read()
    assert 'Use internal networking to restrict access to the actuator endpoints.' in actuator_content
    assert 'Configure your gateway or proxy to allowlist only trusted IP addresses or networks.' in actuator_content
    assert 'Disable any unused actuator endpoints to minimize the attack surface.' in actuator_content
    assert 'Use `ActuatorConfig(include_details=False)` to exclude sensitive information from the actuator responses before exposing them outside a trusted boundary.' in actuator_content