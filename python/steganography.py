import sys
with open(sys.argv[1],'rb') as f:
  content = f.read()
  offset = content.index(bytes.fromhex('FFD9'))
  f.seek(offset + 2)
  return f.read()