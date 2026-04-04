import PyPDF2
r = PyPDF2.PdfReader('public/Tabe Kervine Tembi CV.pdf')
print('\n'.join([p.extract_text() for p in r.pages]))
