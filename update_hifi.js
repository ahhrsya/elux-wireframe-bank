const fs = require('fs');
const path = require('path');

const bankDir = '/Users/user/Downloads/bank wireframe/layout-bank';

function replaceInFile(filePath, findPattern, replacePattern) {
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(findPattern, replacePattern);
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

// Hero A
replaceInFile(
    path.join(bankDir, 'components/sections/hero/HeroA.tsx'),
    /ctaSecondary=\{\{ text: "Learn More", href: "#" \}\}/,
    `ctaSecondary={{ text: "Learn More", href: "#" }}\n      imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"`
);

// Hero B
replaceInFile(
    path.join(bankDir, 'components/sections/hero/HeroB.tsx'),
    /ctaPrimary=\{\{ text: "Start Free Trial", href: "#" \}\}/,
    `ctaPrimary={{ text: "Start Free Trial", href: "#" }}\n      imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"`
);

// Hero D
replaceInFile(
    path.join(bankDir, 'components/sections/hero/HeroD.tsx'),
    /ctaSecondary=\{\{ text: "Watch Demo", href: "#" \}\}/,
    `ctaSecondary={{ text: "Watch Demo", href: "#" }}\n      imageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200"`
);

// Features B
replaceInFile(
    path.join(bankDir, 'components/sections/features/FeaturesB.tsx'),
    /<div className="w-48 h-48 bg-white rounded-2xl border border-neutral-200 flex items-center justify-center">\s*<Icon\s*name=\{feature\.icon\}\s*className="w-12 h-12 text-accent-500"\s*\/>\s*<\/div>/g,
    `<div className="w-full aspect-video md:aspect-square bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100">\n                <img src={\`https://images.unsplash.com/photo-\${index % 2 === 0 ? '1460925895917-afdab827c52f' : '1551288049-bebda4e38f71'}?auto=format&fit=crop&q=80&w=800\`} className="w-full h-full object-cover" alt="Feature" />\n              </div>`
);

console.log("Updated to HiFi");
