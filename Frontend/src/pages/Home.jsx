import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch } from "react-icons/fa";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const allEvents = [
    {
      id: 1,
      title: "Music Concert",
      category: "Music",
      description: "A night of electrifying performances and live music 🎶",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Tech Conference",
      category: "Technology",
      description: "Explore the latest innovations in technology 💻",
      image:
        "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "After Party",
      category: "Party",
      description: "Celebrate with friends and enjoy a vibrant atmosphere 🎊",
      image:
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const results = allEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query)
    );
    setFilteredEvents(results);
  }, [searchQuery]);

  const backgroundImage =
    "url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80')";

  return (
    <div
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          minHeight: "100vh",
        }}
      >
        {/* Hero Section */}
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ minHeight: "100vh" }}
        >
          <h1 className="fw-bold display-3 mb-3 animate__animated animate__fadeInDown">
            🎉 Welcome to Event Dashboard
          </h1>
          <p
            className="lead mb-4 animate__animated animate__fadeInUp"
            style={{
              fontSize: "1.4rem",
              background: "linear-gradient(90deg, #ffdd00, #ff0080)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Plan. Manage. Experience Events Like Never Before 🚀
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Button
              variant="warning"
              size="lg"
              className="px-4 shadow-lg fw-bold"
              href="/create"
            >
              Create Event
            </Button>
            <Button
              variant="light"
              size="lg"
              className="px-4 shadow-lg fw-bold"
              href="/events"
            >
              Explore Events
            </Button>
          </div>
        </Container>

        {/* Search Bar */}
        <Container className="py-4" data-aos="fade-up">
          <div
            className="d-flex justify-content-center"
            style={{
              position: "relative",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            <Form.Control
              type="text"
              placeholder="Search events by name or category..."
              className="rounded-pill px-5 py-3 shadow-lg border-0"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                color: "white",
                fontSize: "1.1rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease-in-out",
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={(e) =>
                (e.target.style.boxShadow =
                  "0 0 15px rgba(255,255,255,0.8)")
              }
              onBlur={(e) =>
                (e.target.style.boxShadow =
                  "0 4px 20px rgba(0,0,0,0.4)")
              }
            />
            <FaSearch
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#fff",
                opacity: "0.7",
              }}
              size={20}
            />
          </div>
        </Container>

        {/* Upcoming Events Section */}
        <Container className="text-center py-5">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            Upcoming Events 🔥
          </h2>
          <Row className="g-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <Col key={event.id} md={4}>
                  <Card
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                    className="shadow-lg h-100"
                    style={{
                      background: "rgba(255, 255, 255, 0.15)",
                      borderRadius: "20px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "white",
                      transition: "transform 0.3s, box-shadow 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px rgba(0,0,0,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(0,0,0,0.3)";
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={event.image}
                      style={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        height: "220px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        className="fw-bold"
                        style={{
                          background: "linear-gradient(90deg, #00c6ff, #0072ff)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontSize: "1.4rem",
                        }}
                      >
                        {event.title}
                      </Card.Title>
                      <Card.Text className="text-light small">
                        {event.description}
                      </Card.Text>
                      <Button variant="outline-light" className="fw-bold px-4">
                        Register Now
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="text-light">❌ No events found.</p>
            )}
          </Row>
        </Container>

        {/* Footer */}
        <footer className="text-center py-4 mt-5">
          <p className="mb-0">
            © {new Date().getFullYear()} Event Dashboard. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
