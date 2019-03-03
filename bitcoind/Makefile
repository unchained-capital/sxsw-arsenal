
VENV_DIR                   := .virtualenv
PYTHON_REQUIREMENTS        := requirements.txt

PIP        := $(VENV_DIR)/bin/pip
PYTHON3    := $(shell command -v python3 2> /dev/null)

default: python-dependencies

$(VENV_DIR):
ifdef PYTHON2
	virtualenv --prompt='(trefoil) ' $(VENV_DIR)
else
	$(PYTHON3) -m venv $(VENV_DIR)
endif

python-dependencies: $(VENV_DIR)
	$(PIP) install -r $(PYTHON_REQUIREMENTS)
