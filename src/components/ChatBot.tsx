import { useState, useRef, useEffect } from 'react';
import {
  Box,
  IconButton,
  TextField,
  Paper,
  Typography,
  Avatar,
  Fab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
  Badge,
  Collapse,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Chat,
  Close,
  Send,
  SmartToy,
  Person,
  ExpandMore,
  ExpandLess
} from '@mui/icons-material';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I\'m your virtual shopping assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Product related responses
    if (lowerCaseMessage.includes('product') || lowerCaseMessage.includes('shop')) {
      return 'I can help you find the perfect products! You can browse our collection in the Shop section. What type of clothing are you looking for?';
    }
    
    // Avatar related responses
    if (lowerCaseMessage.includes('avatar') || lowerCaseMessage.includes('try on')) {
      return 'Our AI avatar feature lets you virtually try on clothes! Just upload your photo and create your personalized avatar in the Avatar Creation section.';
    }
    
    // Pricing related responses
    if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
      return 'We offer various pricing plans to suit your needs. Check our Pricing section for detailed information about our free and premium features.';
    }
    
    // Help related responses
    if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('support')) {
      return 'I\'m here to help! You can ask me about products, avatar creation, pricing, or navigate to our Support page for more assistance.';
    }
    
    // Contact related responses
    if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('email')) {
      return 'You can reach us through the Contact page or email us at hello@glamorithm.com. We typically respond within 24 hours!';
    }
    
    // Default response
    return 'Thanks for your message! I can help you with shopping, avatar creation, pricing, and general questions. What would you like to know?';
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const chatContent = (
    <Box sx={{ 
      height: isMobile ? '100vh' : 500, 
      width: isMobile ? '100vw' : 350,
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      {/* Chat Header */}
      <Box sx={{ 
        p: 2, 
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}>
              <SmartToy />
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                Glamorithm Assistant
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {isTyping ? 'Typing...' : 'Online'}
              </Typography>
            </Box>
          </Box>
          <IconButton 
            onClick={() => setIsOpen(false)}
            sx={{ color: 'white' }}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>

      {/* Messages Area */}
      <Box sx={{ 
        flex: 1, 
        overflow: 'auto', 
        p: 2,
        background: 'rgba(255, 255, 255, 0.05)'
      }}>
        <List sx={{ p: 0 }}>
          {messages.map((message) => (
            <ListItem 
              key={message.id} 
              sx={{ 
                flexDirection: 'column',
                alignItems: message.sender === 'user' ? 'flex-end' : 'flex-start',
                p: 1,
                mb: 1
              }}
            >
              <Box sx={{ 
                maxWidth: '80%',
                display: 'flex',
                alignItems: 'flex-end',
                gap: 1,
                flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
              }}>
                <ListItemAvatar sx={{ minWidth: 'auto' }}>
                  <Avatar 
                    sx={{ 
                      width: 32, 
                      height: 32,
                      bgcolor: message.sender === 'user' ? 'primary.main' : 'white',
                      color: message.sender === 'user' ? 'white' : 'primary.main'
                    }}
                  >
                    {message.sender === 'user' ? <Person /> : <SmartToy />}
                  </Avatar>
                </ListItemAvatar>
                <Paper
                  sx={{
                    p: 2,
                    background: message.sender === 'user' 
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'white',
                    color: message.sender === 'user' ? 'white' : 'text.primary',
                    borderRadius: 2,
                    boxShadow: 1
                  }}
                >
                  <Typography variant="body2">
                    {message.text}
                  </Typography>
                </Paper>
              </Box>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.6)',
                  mt: 0.5,
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                {formatTime(message.timestamp)}
              </Typography>
            </ListItem>
          ))}
          {isTyping && (
            <ListItem sx={{ flexDirection: 'column', alignItems: 'flex-start', p: 1, mb: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
                <ListItemAvatar sx={{ minWidth: 'auto' }}>
                  <Avatar sx={{ width: 32, height: 32, bgcolor: 'white', color: 'primary.main' }}>
                    <SmartToy />
                  </Avatar>
                </ListItemAvatar>
                <Paper sx={{ p: 2, background: 'white', borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'grey.400', animation: 'pulse 1.4s infinite' }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'grey.400', animation: 'pulse 1.4s 0.2s infinite' }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'grey.400', animation: 'pulse 1.4s 0.4s infinite' }} />
                  </Box>
                </Paper>
              </Box>
            </ListItem>
          )}
        </List>
        <div ref={messagesEndRef} />
      </Box>

      {/* Input Area */}
      <Box sx={{ 
        p: 2, 
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
            sx={{
              '& .MuiOutlinedInput-root': {
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
                '& fieldset': {
                  border: 'none',
                },
              }
            }}
          />
          <IconButton 
            onClick={handleSendMessage}
            disabled={isTyping || inputMessage.trim() === ''}
            sx={{ 
              background: 'white',
              color: 'primary.main',
              '&:hover': { background: 'rgba(255, 255, 255, 0.8)' },
              '&:disabled': { background: 'rgba(255, 255, 255, 0.5)' }
            }}
          >
            <Send />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Chat Button */}
      <Fab
        color="primary"
        onClick={() => setIsOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
          },
          zIndex: 1000
        }}
      >
        <Badge 
          badgeContent={messages.length > 1 ? messages.length - 1 : 0} 
          color="error"
          sx={{
            '& .MuiBadge-badge': {
              fontSize: '0.6rem',
              height: 16,
              minWidth: 16
            }
          }}
        >
          <Chat />
        </Badge>
      </Fab>

      {/* Chat Window */}
      {isMobile ? (
        <Drawer
          anchor="bottom"
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              height: '100vh',
            }
          }}
        >
          {chatContent}
        </Drawer>
      ) : (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: 350,
            height: 500,
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 4,
            zIndex: 1000,
            display: isOpen ? 'block' : 'none'
          }}
        >
          {chatContent}
        </Paper>
      )}

      {/* Add typing animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default ChatBot;
