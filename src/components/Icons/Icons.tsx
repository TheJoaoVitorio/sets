import { House } from 'lucide-react';
import { Image } from 'lucide-react';
import { Brush  } from 'lucide-react';
import { Sticker } from 'lucide-react';
import { Video } from 'lucide-react';
import { Palette   } from 'lucide-react';
import { Box } from 'lucide-react';
import { BookOpenText } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { TypeOutline } from 'lucide-react';
import { Rss } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { Component } from 'lucide-react';
import { Dice4 } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';


export class Icons {
    static Home = (props: React.ComponentProps<typeof House>) => <House {...props} />;
    static Image = (props: React.ComponentProps<typeof Image>) => <Image {...props} />;
    static Brush  = (props: React.ComponentProps<typeof Brush >) => <Brush  {...props} />;
    static Sticker = (props: React.ComponentProps<typeof Sticker>) => <Sticker {...props} />;
    static Video = (props: React.ComponentProps<typeof Video>) => <Video {...props} />;
    static Palette = (props: React.ComponentProps<typeof Palette  >) => <Palette   {...props} />;
    static Box = (props: React.ComponentProps<typeof Box>) => <Box {...props} />;
    static Book = (props: React.ComponentProps<typeof BookOpenText>) => <BookOpenText {...props} />;
    static Idea = (props: React.ComponentProps<typeof Lightbulb>) => <Lightbulb {...props} />;
    static Typography = (props: React.ComponentProps<typeof TypeOutline>) => <TypeOutline {...props} />;
    static Blogs = (props: React.ComponentProps<typeof Rss>) => <Rss {...props} />;
    static Tools = (props: React.ComponentProps<typeof Wrench>) => <Wrench {...props} />;
    static Component = (props: React.ComponentProps<typeof Component>) => <Component {...props} />;
    static Background = (props: React.ComponentProps<typeof Dice4>) => <Dice4 {...props} />;
    static LayoutDashboard = (props: React.ComponentProps<typeof LayoutDashboard>) => <LayoutDashboard {...props} />;
}

export default Icons;