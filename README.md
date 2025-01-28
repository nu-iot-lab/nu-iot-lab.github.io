# NU IoT Lab Website

This repository contains the source code for the NU IoT Lab website built with MkDocs Material theme.

## Prerequisites

- Python 3.x
- Git

## Local Development Setup

1. Clone the repository:

    ```shell
    git clone https://github.com/nu-iot-lab/nu-iot-lab.github.io.git
    cd nu-iot-lab.github.io
    ```

2. Create a virtual environment:

    ```shell
    python -m venv venv
    ```

3. Activate the virtual environment:

    On macOS/Linux:

    ```shell
    source venv/bin/activate
    ```

    On Windows:

    ```shell
    .\venv\Scripts\activate
    ```

4. Install dependencies:

    ```shell
    pip install -r requirements.txt
    ```

5. Start the development server:

    ```shell
    mkdocs serve
    ```

    The site will be available at <http://127.0.0.1:8000>

> [!NOTE]
> Available Commands for `mkdocs`
>
> - Build the documentation:
>
>    ```shell
>    mkdocs build
>    ```
>
> - Deploy to GitHub Pages:
>
>    ```shell
>    mkdocs gh-deploy
>    ```
>
> - Create a new project:
>
>    ```shell
>    mkdocs new [dir-name]
>    ```

## Project Structure

``` console
├── docs/               # Documentation source files 
├── overrides/          # Theme customization files
├── .github/            # GitHub Actions workflows 
├── mkdocs.yml          # MkDocs configuration 
└── requirements.txt    # Python dependencies
```

## License

This project is licensed under the MIT License.
