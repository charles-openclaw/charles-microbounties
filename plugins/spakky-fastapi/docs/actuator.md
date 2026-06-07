# Actuator Endpoints

The actuator provides various endpoints for monitoring and managing your application. However, please note that these endpoints are **unauthenticated public HTTP routes by default**. To harden your application for production, consider the following:

* Use internal networking to restrict access to the actuator endpoints.
* Configure your gateway or proxy to allowlist only trusted IP addresses or networks.
* Disable any unused actuator endpoints to minimize the attack surface.
* Use `ActuatorConfig(include_details=False)` to exclude sensitive information from the actuator responses before exposing them outside a trusted boundary.

## Endpoints

The following endpoints are available:

* `/actuator/health`
* `/actuator/info`
* `/actuator/metrics`

## Configuration

To configure the actuator, use the `ActuatorConfig` class: