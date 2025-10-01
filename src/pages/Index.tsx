import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'Сайт-визитка',
      description: 'Современный лендинг для школьного проекта с анимациями',
      tags: ['React', 'CSS', 'Figma'],
      icon: 'Globe'
    },
    {
      title: 'Калькулятор оценок',
      description: 'Приложение для подсчета среднего балла',
      tags: ['JavaScript', 'HTML'],
      icon: 'Calculator'
    },
    {
      title: 'Портфолио дизайнера',
      description: 'Галерея работ с интерактивными элементами',
      tags: ['Photoshop', 'Web'],
      icon: 'Palette'
    }
  ];

  const skills = [
    { name: 'HTML/CSS', level: 90, icon: 'Code' },
    { name: 'JavaScript', level: 75, icon: 'FileCode' },
    { name: 'React', level: 70, icon: 'Sparkles' },
    { name: 'Figma', level: 85, icon: 'Pen' },
    { name: 'Git/GitHub', level: 65, icon: 'GitBranch' }
  ];

  const achievements = [
    {
      title: 'Победитель хакатона',
      year: '2024',
      description: 'Первое место в школьном IT-хакатоне',
      icon: 'Trophy'
    },
    {
      title: 'Сертификат HTML Academy',
      year: '2023',
      description: 'Прошёл курс по веб-разработке',
      icon: 'Award'
    },
    {
      title: 'Публикация на GitHub',
      year: '2024',
      description: '15+ проектов с открытым исходным кодом',
      icon: 'Star'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Портфолио
            </h1>
            <div className="flex gap-2">
              {[
                { id: 'home', icon: 'Home', label: 'Главная' },
                { id: 'projects', icon: 'Briefcase', label: 'Проекты' },
                { id: 'skills', icon: 'Code', label: 'Навыки' },
                { id: 'achievements', icon: 'Trophy', label: 'Достижения' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="gap-1"
                >
                  <Icon name={item.icon as any} size={16} />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-10 rounded-3xl blur-3xl"></div>
            <div className="relative text-center py-20">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-scale-in">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 animate-slide-up">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Привет! Я Александр
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Школьник-разработчик, создаю крутые веб-проекты
              </p>
              <div className="flex gap-3 justify-center flex-wrap animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                  <Icon name="Mail" size={20} className="mr-2" />
                  Связаться
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Icon name="Github" size={20} className="mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Мои проекты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={project.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Обо мне
          </h2>
          <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-white to-secondary/30">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="text-lg mb-4 leading-relaxed">
                  Я увлечён веб-разработкой уже 2 года. Люблю создавать красивые и функциональные сайты,
                  которые помогают людям решать их задачи.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Когда не программирую — играю на гитаре, фотографирую или читаю про новые технологии.
                  Мечтаю стать fullstack-разработчиком и создать собственный стартап.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="gap-2">
                  <Icon name="MapPin" size={18} />
                  Москва
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="Calendar" size={18} />
                  16 лет
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="GraduationCap" size={18} />
                  10 класс
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="skills" className="py-16 px-4 bg-gradient-to-b from-white to-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Навыки
          </h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon name={skill.icon as any} size={20} className="text-white" />
                    </div>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Достижения
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Icon name={achievement.icon as any} size={32} className="text-white" />
                </div>
                <Badge className="mb-3 bg-primary/10 text-primary border-0">{achievement.year}</Badge>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border bg-gradient-to-b from-white to-secondary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground mb-4">Давайте создадим что-то крутое вместе!</p>
          <div className="flex gap-4 justify-center mb-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Icon name="Mail" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Александр. Сделано с ❤️ и кодом</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
