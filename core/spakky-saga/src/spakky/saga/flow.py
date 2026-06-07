from typing import Callable, Union

class SagaFlowDefinitionError(Exception):
    pass

class SagaStep:
    # existing code...

    def __init__(self, action: Callable, compensate: Union[Callable, 'SagaStep'] = None):
        # existing code...
        if compensate is not None and not callable(compensate):
            raise SagaFlowDefinitionError("Compensation must be a callable or a SagaStep")

    # existing code...

def step(action: Callable, compensate: Union[Callable, SagaStep] = None) -> SagaStep:
    if compensate is not None and not callable(compensate) and not isinstance(compensate, SagaStep):
        raise SagaFlowDefinitionError("Compensation must be a callable or a SagaStep")
    # existing code...