'use client'

import { useFacebookPixel } from '@/hooks/use-facebook-pixel'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function TestPageViewTracking() {
  const { trackPageView, trackCustomEvent, isReady } = useFacebookPixel()

  const handleManualPageView = () => {
    console.log('🧪 Manual PageView button clicked')
    trackPageView()
  }

  const handleCustomEvent = () => {
    console.log('🧪 Custom event button clicked')
    trackCustomEvent('TestEvent', { source: 'test-component', timestamp: Date.now() })
  }

  if (process.env.NODE_ENV === 'production') {
    return null // Don't show in production
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 bg-yellow-50 border-yellow-200 z-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-yellow-800">🧪 PageView Testing</CardTitle>
        <CardDescription className="text-xs text-yellow-600">
          Facebook Pixel Status: {isReady ? '✅ Ready' : '❌ Not Ready'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button 
          size="sm" 
          variant="outline" 
          onClick={handleManualPageView}
          className="w-full text-xs"
        >
          Test Manual PageView
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={handleCustomEvent}
          className="w-full text-xs"
        >
          Test Custom Event
        </Button>
        <p className="text-xs text-yellow-700 mt-2">
          Check console for tracking logs. Navigate between routes to test automatic PageView tracking.
        </p>
      </CardContent>
    </Card>
  )
}
