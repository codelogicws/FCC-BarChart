cp -al ./html/* ./built/
cp -al ./es5/* ./built/
cp -al ./css ./built

file1="./publish.sh"
if [ -e "$file1" ]; then
    . ./publish.sh
fi
