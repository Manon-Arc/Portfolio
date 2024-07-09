import { Chrono } from "react-chrono";

const data = [
    {
      title: 'First item',
      media: {
        type: 'IMAGE',
        source: {
          url: '',
        },
      },
      text: 'This is the caption for the first item.',
    },
  ];
  
  export default function App() {
    return (
      <div className="App">
        <div style={{ width: "90%", height: "90vh" }}>
          <Chrono
            items={data}
            mode="VERTICAL"
            slideShow
            slideItemDuration={3000}
            cardHeight={250}
            cardWidth={600}
            fontSizes={{
              title: "1.1rem"
            }}
            contentDetailsHeight={150}
          />
        </div>
      </div>
    );
  }
  