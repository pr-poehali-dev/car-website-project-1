import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const carModels = [
  {
    id: 1,
    name: 'NEXUS GT-X',
    category: 'Спорткар',
    power: '850 л.с.',
    acceleration: '2.3 сек',
    price: '₽12 500 000',
    image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/2f330165-6d36-4b0e-9483-fa197a9f2316.jpg',
    views: [
      { angle: 'Спереди', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/2f330165-6d36-4b0e-9483-fa197a9f2316.jpg' },
      { angle: 'Сбоку', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/202774f0-78e2-4fc3-a5b1-ebbffa6c713e.jpg' },
      { angle: 'Сзади', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/f0965830-7a00-49bf-a99b-68d2eda7aa2d.jpg' }
    ]
  },
  {
    id: 2,
    name: 'QUANTUM X7',
    category: 'Кроссовер',
    power: '420 л.с.',
    acceleration: '4.8 сек',
    price: '₽6 800 000',
    image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/202774f0-78e2-4fc3-a5b1-ebbffa6c713e.jpg',
    views: [
      { angle: 'Спереди', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/202774f0-78e2-4fc3-a5b1-ebbffa6c713e.jpg' },
      { angle: 'Сбоку', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/f0965830-7a00-49bf-a99b-68d2eda7aa2d.jpg' },
      { angle: 'Сзади', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/2f330165-6d36-4b0e-9483-fa197a9f2316.jpg' }
    ]
  },
  {
    id: 3,
    name: 'VELOCITY HYPER',
    category: 'Гиперкар',
    power: '1200 л.с.',
    acceleration: '1.9 сек',
    price: '₽24 900 000',
    image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/f0965830-7a00-49bf-a99b-68d2eda7aa2d.jpg',
    views: [
      { angle: 'Спереди', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/f0965830-7a00-49bf-a99b-68d2eda7aa2d.jpg' },
      { angle: 'Сбоку', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/2f330165-6d36-4b0e-9483-fa197a9f2316.jpg' },
      { angle: 'Сзади', image: 'https://cdn.poehali.dev/projects/ae2c345c-9742-4448-bb57-91ac0810f847/files/202774f0-78e2-4fc3-a5b1-ebbffa6c713e.jpg' }
    ]
  }
];

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState(0);

  const handleCarSelect = (carId: number) => {
    setSelectedCar(carId);
    setCurrentView(0);
  };

  const selectedCarData = selectedCar ? carModels.find(car => car.id === selectedCar) : null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl glow text-primary font-thin">FUTURE MOTORS</h1>
            <nav className="flex gap-6">
              <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                <Icon name="Home" className="mr-2" size={18} />
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
                <Icon name="Car" className="mr-2" size={18} />
                Модели
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-6xl font-bold mb-6 glow">
            Автомобили будущего
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Познакомьтесь с новым поколением электромобилей. 
            Инновационные технологии, футуристичный дизайн, невероятная мощность.
          </p>
        </div>

        {!selectedCar ? (
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {carModels.map((car, index) => (
                <Card 
                  key={car.id}
                  className="bg-card border-border overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:card-glow animate-slide-up group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => handleCarSelect(car.id)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-2 border border-primary/30">
                        {car.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white glow-sm">{car.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Icon name="Zap" className="text-primary" size={20} />
                        <div>
                          <p className="text-xs text-muted-foreground">Мощность</p>
                          <p className="font-semibold">{car.power}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Gauge" className="text-secondary" size={20} />
                        <div>
                          <p className="text-xs text-muted-foreground">0-100 км/ч</p>
                          <p className="font-semibold">{car.acceleration}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border flex justify-end items-center">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Осмотр
                        <Icon name="ArrowRight" className="ml-2" size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="container mx-auto animate-fade-in">
            <Button 
              onClick={() => setSelectedCar(null)}
              variant="ghost"
              className="mb-6 text-foreground hover:text-primary"
            >
              <Icon name="ArrowLeft" className="mr-2" size={18} />
              Вернуться к каталогу
            </Button>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="bg-card border-border overflow-hidden card-glow">
                  <div className="relative">
                    <img 
                      src={selectedCarData?.views[currentView].image} 
                      alt={selectedCarData?.views[currentView].angle}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        {selectedCarData?.views.map((view, index) => (
                          <Button
                            key={index}
                            onClick={() => setCurrentView(index)}
                            variant={currentView === index ? "default" : "secondary"}
                            className={`flex-1 ${currentView === index ? 'bg-primary text-primary-foreground' : 'bg-card/80 backdrop-blur-sm'}`}
                          >
                            {view.angle}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-3 gap-4">
                  {selectedCarData?.views.map((view, index) => (
                    <div 
                      key={index}
                      onClick={() => setCurrentView(index)}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                        currentView === index ? 'border-primary card-glow' : 'border-border opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={view.image} alt={view.angle} className="w-full h-24 object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <Card className="bg-card border-border p-8 h-fit">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-4 border border-primary/30">
                  {selectedCarData?.category}
                </span>
                <h2 className="text-4xl font-bold mb-6 glow">{selectedCarData?.name}</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon name="Zap" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Мощность</p>
                      <p className="text-2xl font-bold">{selectedCarData?.power}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <Icon name="Gauge" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Разгон 0-100 км/ч</p>
                      <p className="text-2xl font-bold">{selectedCarData?.acceleration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon name="Battery" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Запас хода</p>
                      <p className="text-2xl font-bold">650 км</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                      <Icon name="Calendar" className="mr-2" size={18} />
                      Тест-драйв
                    </Button>
                    <Button variant="outline" className="flex-1 h-12 border-primary text-primary hover:bg-primary/10">
                      <Icon name="Phone" className="mr-2" size={18} />
                      Связаться
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </section>

      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 glow-sm text-primary">FUTURE MOTORS</h3>
          <p className="text-muted-foreground mb-6">Автомобили нового поколения</p>
          <div className="flex justify-center gap-6">
            <Icon name="Facebook" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
            <Icon name="Twitter" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
            <Icon name="Instagram" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
            <Icon name="Youtube" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;