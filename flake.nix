{
  description = "ytm-player";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
    python-packages = {
      url = "github:peternaame-boop/ytm-player";
      flake = false;
    };
    packaging = {
      url = "github:pypa/packaging";
      flake = false;
    };
  };

  outputs = { self, nixpkgs, flake-utils, python-packages, packaging }:
    flake-utils.lib.eachSystem [ "x86_64-linux" "x86_64-darwin" ] (system:
    let
      pkgs = import nixpkgs {
        inherit system;
        overlays = [ ];
      };
      python = pkgs.python3;
      pythonPackages = python.pkgs;
      ytm-player = pythonPackages.buildPythonPackage {
        name = "ytm-player";
        src = python-packages;
        buildInputs = [ pythonPackages.setuptools ];
        propagatedBuildInputs = [ pythonPackages.requests pythonPackages.pydub pythonPackages.pytube pythonPackages.pyparsing pythonPackages.appdirs packaging ];
        doCheck = false;
      };
    in
    {
      packages.ytm-player = ytm-player;
      defaultPackage = ytm-player;

      devShell = pkgs.mkShell {
        buildInputs = [ python pythonPackages.setuptools pythonPackages.requests pythonPackages.pydub pythonPackages.pytube pythonPackages.pyparsing pythonPackages.appdirs packaging ];
      };
    });
}