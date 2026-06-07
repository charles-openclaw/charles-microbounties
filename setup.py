from setuptools import setup

setup(
    name='seocho',
    version='0.4.1',
    packages=['seocho'],
    install_requires=[
        # Add PyYAML to the core dependencies
        'pyyaml',
        # Other dependencies...
    ],
    extras_require={
        'ontology': [
            # Add PyYAML to the ontology extra
            'pyyaml',
            # Other ontology dependencies...
        ],
        'embedded': [
            # Add PyYAML to the embedded extra
            'pyyaml',
            # Other embedded dependencies...
        ],
    },
)