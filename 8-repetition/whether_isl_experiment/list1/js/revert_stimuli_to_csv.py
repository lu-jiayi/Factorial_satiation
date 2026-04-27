import re
import json
import csv

input_file = "stimuli.js"
output_file = "stimuli.csv"

with open(input_file, "r", encoding="utf-8") as f:
    js_text = f.read()

# Extract the array assigned to const all_stimuli
match = re.search(r"const\s+all_stimuli\s*=\s*(\[[\s\S]*?\])", js_text)

if not match:
    raise ValueError("Could not find all_stimuli array in the JS file.")

stimuli_text = match.group(1)

# Parse as JSON
stimuli = json.loads(stimuli_text)

# Write CSV
fieldnames = stimuli[0].keys()

with open(output_file, "w", encoding="utf-8-sig", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(stimuli)

print(f"Wrote {len(stimuli)} rows to {output_file}")