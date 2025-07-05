
import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Bot, Send, Sparkles, Loader2, AlertTriangle, Mic, MicOff, Image, Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  attachments?: { type: 'image' | 'audio'; url: string; name: string }[];
}

export const AIMJFTab = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [attachments, setAttachments] = useState<{ type: 'image' | 'audio'; url: string; name: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const chunks: BlobPart[] = [];

      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        const attachment = {
          type: 'audio' as const,
          url,
          name: `audio_${Date.now()}.webm`
        };
        setAttachments(prev => [...prev, attachment]);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      toast({
        title: t('error'),
        description: t('microphoneError'),
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
      setIsRecording(false);
      setMediaRecorder(null);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        const attachment = {
          type: 'image' as const,
          url,
          name: file.name
        };
        setAttachments(prev => [...prev, attachment]);
      }
    });
  };

  const removeAttachment = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() && attachments.length === 0) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      attachments: [...attachments]
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setAttachments([]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          context: 'minecraft-java-finder',
          attachments: attachments
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }

      const data = await response.json();
      
      const aiMessage: ChatMessage = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI Chat Error:', error);
      toast({
        title: t('error'),
        description: t('aiError'),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-600" />
            AI Minecraft Java Finder
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              <Sparkles className="w-3 h-3 mr-1" />
              Beta
            </Badge>
          </CardTitle>
          <CardDescription>
            {t('aiDescription')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 p-4 rounded-lg border">
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-800 dark:text-amber-200">{t('apiKeySetup')}</p>
                <p className="text-amber-700 dark:text-amber-300 mt-1">
                  {t('apiKeyDescription')} <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900 dark:hover:text-amber-100">Google AI Studio</a>
                </p>
              </div>
            </div>
          </div>

          {messages.length === 0 && (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{t('startConversation')}</h3>
                <p className="text-muted-foreground">
                  {t('exampleQuestions')}
                </p>
              </div>
            </div>
          )}

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in-right`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-muted text-foreground border'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.role === 'assistant' && (
                      <Bot className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="space-y-2">
                      <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                      {message.attachments && message.attachments.length > 0 && (
                        <div className="space-y-2">
                          {message.attachments.map((attachment, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs opacity-80">
                              {attachment.type === 'image' ? (
                                <div className="flex items-center gap-1">
                                  <Image className="w-3 h-3" />
                                  <img src={attachment.url} alt={attachment.name} className="max-w-32 max-h-20 rounded" />
                                </div>
                              ) : (
                                <div className="flex items-center gap-1">
                                  <Mic className="w-3 h-3" />
                                  <audio controls className="max-w-32">
                                    <source src={attachment.url} type="audio/webm" />
                                  </audio>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`text-xs mt-2 opacity-70 ${message.role === 'user' ? 'text-blue-100' : 'text-muted-foreground'}`}>
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Separator />

          {attachments.length > 0 && (
            <div className="flex flex-wrap gap-2 p-2 bg-muted/30 rounded-lg">
              {attachments.map((attachment, index) => (
                <div key={index} className="relative flex items-center gap-2 bg-background p-2 rounded border">
                  {attachment.type === 'image' ? (
                    <img src={attachment.url} alt={attachment.name} className="w-8 h-8 object-cover rounded" />
                  ) : (
                    <Mic className="w-4 h-4" />
                  )}
                  <span className="text-xs truncate max-w-16">{attachment.name}</span>
                  <button
                    onClick={() => removeAttachment(index)}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('askQuestion')}
              className="min-h-[100px] resize-none focus:ring-2 focus:ring-purple-500"
              disabled={isLoading}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={isRecording ? stopRecording : startRecording}
                  className={isRecording ? 'bg-red-50 border-red-200' : ''}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Image className="w-4 h-4" />
                </Button>
                <div className="text-xs text-muted-foreground">
                  {t('enterToSend')}
                </div>
              </div>
              <Button
                onClick={sendMessage}
                disabled={(!inputMessage.trim() && attachments.length === 0) || isLoading}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Send className="w-4 h-4 mr-2" />
                )}
                {isLoading ? t('sending') : t('send')}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
