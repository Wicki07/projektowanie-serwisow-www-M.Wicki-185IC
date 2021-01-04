//Import niezbędnych pakietów
import './App.css';
import React, { useState } from 'react'; 
import useCollapse from 'react-collapsed';
import { Button, Card } from 'react-bootstrap';

//Główna funkcja

function App() {
  //Zmienne z pakiet react-collapsed można zmienić nazwy zmiennych boolen czyli np isExpanded natomiast nazwy funkcji muszą pozostać takie same 
  // w innym wypadku pojawia się błąd nie znalezienia fukcji
  // fukcja spradza czy przycisk został naciśnięty następnie wykonuje się na wybranym elemncie

  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  
  // Zwracany div
  // Dodałem elemet Card z react-bootstrap dla ładnejszego wyglądu oraz zmieniłem gotowe przyciski na przyciski z bootstrapa
  return (
    <div>
      <Card className="text-center center" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '18rem' }}>
        <Card.Header>Lorem Ipsum</Card.Header>
        <Card.Body>
          <Button 
              {...getToggleProps({
                onClick: () => setExpanded((prevExpanded) => !prevExpanded),
              })}
              
            >
              {isExpanded ? 'Ukryj' : 'Pokaż'}
            </Button>
            <p {...getCollapseProps()}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis quam eget dolor dapibus, 
              non vestibulum lectus luctus. Vestibulum porta pharetra tincidunt. Quisque faucibus aliquam massa, eu ultricies enim pulvinar et. 
              Phasellus at neque at odio varius viverra sit amet nec tellus. In eget lacus non neque imperdiet elementum at at felis. <ReadMore /></p>
        </Card.Body>
      </Card>

    </div>
  );
}

// Dodałem dodatkową fukcję w celu roszerzenia aplikacji o opcje "czytaj dalej"
// Dałąniej fukcji jest podobne do działania fukcji powyżej

function ReadMore() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  
  return (
    <div>
      <section {...getCollapseProps()}> Suspendisse molestie dolor viverra pharetra maximus. Aliquam eu lobortis sem. 
      Vestibulum feugiat, odio quis placerat tincidunt, purus est commodo tellus, eu imperdiet est nulla a ipsum. Sed sollicitudin vestibulum turpis, 
      eget malesuada velit. Duis varius ex in nibh pharetra consequat. Donec a tellus eget nisl aliquam sodales. Mauris sit amet semper orci. 
      Maecenas porta rutrum mi efficitur viverra. Pellentesque id nisl nunc. Morbi imperdiet felis magna, eu faucibus ipsum vestibulum in.</section>
      <Button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        variant="light"
      >
        {isExpanded ? 'Pokaż mniej' : 'Czytaj dalej'}
      </Button>
    </div>
  );
}
export default App;
