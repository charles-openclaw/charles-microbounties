import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from mutants_summary import MutantsSummary

class TestMutantsSummary:
    def test_mutants_summary(self):
        # test code here
        pass

if __name__ == '__main__':
    import unittest
    unittest.main()