# For virtual environment activation

python -m venv venv

source venv/bin/activate # On macOS/Linux

.\venv\Scripts\activate # On Windows

pip install -r requirements.txt

mkdocs --help
Commands:
build Build the MkDocs documentation.
get-deps Show required PyPI packages inferred from plugins in mkdocs.yml.
gh-deploy Deploy your documentation to GitHub Pages.
new Create a new MkDocs project.
serve Run the builtin development server.

Code snippet

```regex
<img src="img\/(.+?)" alt="(.+?)"\s+width="(\d+(?:\.\d+)?)"\s*\/?>
Replacement string:

![$2](img/$1){ width="$3" }

mkdocs serve -a 0.0.0.0:8000
```
