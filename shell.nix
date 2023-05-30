{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    # nativeBuildInputs is usually what you want -- tools you need to run
    nativeBuildInputs = [ pkgs.buildPackages.jekyll pkgs.buildPackages.rubyPackages.jekyll-sitemap ];
    shellHook = '' 
     jekyll build 
    '';
}
