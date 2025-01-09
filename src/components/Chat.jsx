import React, { useState } from 'react';
import { Send, Smile, Minimize2, Maximize2 } from 'lucide-react';
import { IconButton } from './IconButton';

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Sarah', content: 'Great stream today! 🎉', timestamp: new Date() },
    { id: 2, user: 'Mike', content: 'The quality is amazing!', timestamp: new Date() },
    { id: 3, user: 'Alex', content: 'wait for the next part', timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), user: 'Fatuma', content: newMessage, timestamp: new Date() },
    ]);
    setNewMessage('');
  };

  return (
    <div className={`flex flex-col bg-white rounded-lg shadow-lg transition-all duration-300 ${isMinimized ? 'h-[60px]' : 'h-full'}`}>
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Live Chat</h2>
        <IconButton
          icon={isMinimized ? Maximize2 : Minimize2}
          onClick={() => setIsMinimized(!isMinimized)}
          title={isMinimized ? 'Maximize chat' : 'Minimize chat'}
          className="text-gray-500 hover:text-gray-700"
        />
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">{message.user}</span>
                  <span className="text-xs text-gray-500">{message.timestamp.toLocaleTimeString()}</span>
                </div>
                <p className="text-sm text-gray-700">{message.content}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <IconButton
                icon={Smile}
                onClick={() => {}}
                className="text-gray-500 hover:text-gray-700"
                title="Add emoji"
              />
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <IconButton
                icon={Send}
                onClick={handleSendMessage}
                className="text-white bg-orange-500 hover:bg-orange-600"
                title="Send message"
              />
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Chat;
