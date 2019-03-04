VENV_DIR                   := .virtualenv
PYTHON_REQUIREMENTS        := requirements.txt

PIP        := $(VENV_DIR)/bin/pip
# Replace with your python3 command if necessary
PYTHON3    := $(shell command -v python3 2> /dev/null)

default: python-dependencies

$(VENV_DIR):
	$(PYTHON3) -m venv $(VENV_DIR)

python-dependencies: $(VENV_DIR)
	$(PIP) install -r $(PYTHON_REQUIREMENTS)
