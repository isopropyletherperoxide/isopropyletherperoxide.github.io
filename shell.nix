{ pkgs ? import <nixpkgs> { } }:

let
  jekyll-toc = pkgs.buildRubyGem {
    ruby = pkgs.ruby;
    pname = "jekyll-toc";
    gemName = "jekyll-toc";
    version = "0.19.0"; # check latest at rubygems.org/gems/jekyll-toc
    source.sha256 = "sha256-ioJw9+jj2EniA1cQsXE9CvXiGFpL+spw+Rkuz1rFBmg="; # nix build will tell you the real one on first try
  };
in
pkgs.mkShell {
  nativeBuildInputs = [
    pkgs.buildPackages.jekyll
    pkgs.buildPackages.rubyPackages.jekyll-sitemap
    pkgs.buildPackages.rubyPackages.jekyll-feed
    jekyll-toc
  ];
  shellHook = ''
    jekyll build 
  '';
}
