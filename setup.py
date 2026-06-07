from setuptools import setup, find_packages

setup(
    name='gispulse',
    version='1.0',
    packages=find_packages(),
    install_requires=[
        # ... other dependencies ...
        'requests>=2.28,<3.0',  # Added requests dependency
        # ... other dependencies ...
    ],
)