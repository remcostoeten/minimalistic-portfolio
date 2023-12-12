import os
import re

def replace_input_in_file(filename):
    with open(filename, 'r') as file:
        lines = file.readlines()

    # Check if Input is already imported
    input_imported = any('import Input' in line for line in lines)

    # Replace 'input' with 'Input' except for import lines
    lines = [re.sub(r'\binput\b', 'Input', line) if 'import' not in line else line for line in lines]

    # If Input is not imported, add the import statement
    if not input_imported:
        lines.insert(0, "import { Input } from '@/components/ui/input'\n")

    with open(filename, 'w') as file:
        file.writelines(lines)

def replace_input_in_project(root_dir):
    for dir_name, _, file_list in os.walk(root_dir):
        for file_name in file_list:
            if file_name.endswith('.tsx') or file_name.endswith('.ts'):
                replace_input_in_file(os.path.join(dir_name, file_name))

replace_input_in_project('~/sites/REMCOSTOETEN_DIR/portfolio/src')
