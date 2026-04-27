import pandas as pd

# === CONFIG ===
input_file = "latin_square.xlsx"  # your Excel file
output_file = "list_sequence.js"            # output JS file

# Read Excel
df = pd.read_excel(input_file)

# Normalize column names (handle "list1" vs "list 1")
df.columns = [col.strip().lower().replace(" ", "") for col in df.columns]

# Build dictionary
list_sequence = {}

for i in range(1, 9):
    col = f"list{i}"
    if col not in df.columns:
        raise ValueError(f"Column '{col}' not found in file")
    
    # Convert to int (avoid floats from Excel)
    values = df[col].dropna().astype(int).tolist()
    list_sequence[i] = values

# Write JS file
with open(output_file, "w") as f:
    f.write("var list_sequence = {\n")
    
    for i in range(1, 9):
        values_str = ", ".join(map(str, list_sequence[i]))
        f.write(f"  {i}: [{values_str}]")
        if i < 8:
            f.write(",\n")
        else:
            f.write("\n")
    
    f.write("};\n")

print(f"Saved to {output_file}")