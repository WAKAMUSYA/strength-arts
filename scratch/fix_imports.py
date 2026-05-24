import os

lab_dir = r"c:\Users\PSPO-Office2\nt\strength-arts\app\(public)\lab"

for sport in os.listdir(lab_dir):
    sport_path = os.path.join(lab_dir, sport)
    if os.path.isdir(sport_path):
        list_file = os.path.join(sport_path, "articles", "page.tsx")
        if os.path.exists(list_file):
            with open(list_file, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Check if useRouter is imported from next/navigation
            if "import { useSearchParams } from 'next/navigation'" in content:
                content = content.replace("import { useSearchParams } from 'next/navigation'", "import { useSearchParams, useRouter } from 'next/navigation'")
            elif "import { useSearchParams, useRouter }" not in content and "useRouter" not in content.split("from 'next/navigation'")[0]:
                content = content.replace("from 'next/navigation'", ", useRouter } from 'next/navigation'")
                content = content.replace("} ,", ",")
            
            with open(list_file, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Fixed {sport}")

