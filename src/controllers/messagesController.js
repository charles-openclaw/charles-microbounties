const { z } = require('zod');

// Define the schema for message creation
const messageSchema = z.object({
  content: z.string().min(1, 'Content is required'),
  recipientId: z.string().min(1, 'Recipient ID is required'),
});

// ...

// Validate the request body using the schema
const validateMessage = (req, res, next) => {
  try {
    const result = messageSchema.parse(req.body);
    req.validatedBody = result;
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: 'Invalid request body', details: error.issues });
    } else {
      next(error);
    }
  }
};

// ...

// Update the route to use the validation middleware
router.post('/api/messages', validateMessage, (req, res) => {
  // Use the validated body
  const { content, recipientId } = req.validatedBody;
  // ...
});