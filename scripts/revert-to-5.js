const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../');

// 1. Update lib/constants.ts to make all variants: 5
const constantsPath = path.join(baseDir, 'lib', 'constants.ts');
let constantsContent = fs.readFileSync(constantsPath, 'utf8');
constantsContent = constantsContent.replace(/variants: 10/g, 'variants: 5');
fs.writeFileSync(constantsPath, constantsContent);

// 2. Update app/page.tsx just in case
const homePath = path.join(baseDir, 'app', 'page.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');
homeContent = homeContent.replace(/110\+ Section Variants/g, '55+ Section Variants');
fs.writeFileSync(homePath, homeContent);

// 3. For each section type, update its page.tsx to only include A-E and set badge to 5
const sections = ['hero', 'features', 'testimonials', 'pricing', 'cta', 'faq', 'newsletter', 'team', 'blog', 'stats', 'footer'];

sections.forEach(type => {
  const pagePath = path.join(baseDir, 'app', 'sections', type, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace 10 Variants with 5 Variants
    content = content.replace(/10 Variants/g, '5 Variants');
    
    // Remove imports for F, G, H, I, J
    content = content.replace(/import \{ .*?[F-J]Demo \} from .*?;\n?/g, '');
    
    // Remove array elements for f, g, h, i, j
    content = content.replace(/.*id: ".*-[f-j]".*\n?/gi, '');
    
    fs.writeFileSync(pagePath, content);
  }
});

console.log('Reverted to 5 variants everywhere!');
