import sys
import os
import re
from fontTools.subset import main as ss


files = [f for f in os.listdir('.') if os.path.isfile(f)]
os.mkdir('webfonts')

for f in files:
    # do something
    fontExtension = "\.(ttf|otf|woff2?)$"
    x = re.search(fontExtension, f)  # a font file
    if x:
        # STAGE 1: WOFF
        outputFilename = re.sub(fontExtension, '-web.woff2', f)
        sys.argv = [None, f, '--output-file=webfonts/' + outputFilename, '--no-hinting', '--desubroutinize', '--flavor=woff2',
                    '--layout-features=ccmp,locl,mark,mkmk,kern,rlig,liga,dlig,salt', '--unicodes-file=./unicode.txt']
        ss()
        # STAGE 2: OTF
        outputFilename = re.sub(fontExtension, '-web.otf', f)
        sys.argv = [None, f, '--output-file=webfonts/' + outputFilename, '--no-hinting', '--desubroutinize',
                    '--layout-features=ccmp,locl,mark,mkmk,kern,rlig,liga,dlig,salt', '--unicodes-file=./unicode.txt']
        ss()
