# Feedback Service

This microservice manages customer feedback for hotel reservations.

## Features

- Add feedback for a reservation
- Get all feedbacks
- Get feedbacks by reservation ID

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Getting Started

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd feedback_service
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Service

1. Start the service:
    ```sh
    npm start
    ```

### Endpoints

#### Add Feedback

- **URL**: `/addFeedback`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "reservationId": "12345",
    "customerName": "Juan Perez",
    "feedback": "Excellent service and comfortable rooms."
  }
