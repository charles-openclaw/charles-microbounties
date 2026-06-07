# Spakky FastAPI Plugin

## Actuator Guide

The actuator provides various endpoints for monitoring and managing your application. However, please note that these endpoints are **unauthenticated public HTTP routes by default**. To harden your application for production, consider the following:

* Use internal networking to restrict access to the actuator endpoints.
* Configure your gateway or proxy to allowlist only trusted IP addresses or networks.
* Disable any unused actuator endpoints to minimize the attack surface.
* Use `ActuatorConfig(include_details=False)` to exclude sensitive information from the actuator responses before exposing them outside a trusted boundary.

## Production Hardening

To ensure the security of your application, follow these best practices:

* Use a reverse proxy or gateway to restrict access to the actuator endpoints.
* Implement allowlisting to only allow trusted IP addresses or networks to access the actuator endpoints.
* Regularly review and update your actuator configuration to ensure it aligns with your application's security requirements.

## Example Configuration
