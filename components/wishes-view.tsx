"use client"

import { useState } from "react"
import { Copy, Check, Search } from "lucide-react"

interface Wish {
  id: number
  text: string
  category: string
}

const wishes: Wish[] = [
  {
    id: 1,
    text: "May your December be filled with warmth, laughter, and unforgettable moments with loved ones. Let every day bring you closer to your dreams, and may you find joy in the little things. Embrace the magic of this season, celebrate your achievements, and look forward with hope and gratitude. Share your light with others, and let their happiness reflect back to you. This December, may you create memories that will last a lifetime.",
    category: "General",
  },
  {
    id: 2,
    text: "Wishing you a month where every wish you make comes true, and your heart fills with endless possibilities. May you find strength in your journey, wisdom in your choices, and peace in your spirit. Let this December be a reminder of how powerful you truly are. Believe in yourself, pursue your passions, and know that amazing things are coming your way. Your best days are ahead of you.",
    category: "Dreams",
  },
  {
    id: 3,
    text: "May December bring peace, prosperity, and endless possibilities to your life. Let abundance flow through every moment, and may you attract everything your heart desires. This is your time to shine, to grow, and to become the person you've always wanted to be. Embrace change with courage, welcome opportunities with open arms, and trust in the process. You are destined for greatness.",
    category: "Prosperity",
  },
  {
    id: 4,
    text: "This December, may you celebrate all the victories of the year with pride and gratitude. You've overcome challenges, learned valuable lessons, and grown into a stronger version of yourself. Take time to acknowledge your progress and appreciate how far you've come. Share your success with those who supported you, and pay it forward to others. You are a beacon of inspiration.",
    category: "Success",
  },
  {
    id: 5,
    text: "Wishing you a December filled with love, compassion, and genuine human connection. May you feel the warmth of those who care about you and spread kindness everywhere you go. Let your heart be open to giving and receiving love in all its forms. This month, prioritize the relationships that matter most to you. True wealth is measured in love and meaningful connections.",
    category: "Love",
  },
  {
    id: 6,
    text: "May this month be your best yet, full of surprises, blessings, and unexpected miracles. Every day holds the potential for something wonderful to happen. Keep your eyes open, stay optimistic, and be ready to receive the good that's coming your way. Life has so much to offer those who choose to see the beauty in it. Make this month count.",
    category: "Blessings",
  },
  {
    id: 7,
    text: "Wishing you all the happiness that December has to offer, from sunrise to sunset and beyond. Let joy become your natural state of being, flowing through your days with ease and lightness. Smile more, stress less, and find reasons to celebrate. Happiness is not about waiting for the perfect moment, it's about appreciating the present one. You deserve to be happy.",
    category: "Happiness",
  },
  {
    id: 8,
    text: "May December bring you closer to your dreams and goals with every passing day. Stay focused, stay determined, and never lose sight of what matters most to you. Take inspired action toward your aspirations, and watch as doors open and opportunities multiply. Your dedication will pay off in ways you never imagined. The universe supports those who believe in themselves.",
    category: "Goals",
  },
  {
    id: 9,
    text: "Wishing you a festive December filled with light, laughter, and the magic of the season. Celebrate traditions, create new memories, and find joy in the company of loved ones. Let the spirit of togetherness fill your heart and home. Spread cheer wherever you go, and let your presence be a gift to others. This is the season of miracles and love.",
    category: "Festive",
  },
  {
    id: 10,
    text: "May your December be as bright as the stars in the night sky, illuminating your path forward. You have an inner light that shines brighter than you know. Let it radiate outward, inspire others, and light up the world around you. This month, embrace your uniqueness and celebrate everything that makes you special. You are a star.",
    category: "Magic",
  },
  {
    id: 11,
    text: "Wishing you wellness, wealth, and wonderful memories throughout this beautiful month. Take care of your body, mind, and spirit. Invest in yourself and your future, knowing that every positive step you take compounds into greatness. Surround yourself with people and experiences that nourish your soul. Your wellbeing is your greatest asset.",
    category: "Wellness",
  },
  {
    id: 12,
    text: "May December remind you of all the beautiful things in your life and all the reasons you have to be grateful. Gratitude transforms our perspective and opens doors to more blessings. Take time each day to acknowledge what you're thankful for, no matter how small. When you focus on abundance, abundance flows toward you. Gratitude is the key to happiness.",
    category: "Gratitude",
  },
  {
    id: 13,
    text: "Wishing you a December filled with adventure, new experiences, and thrilling moments. Step outside your comfort zone and discover what you're truly capable of. Life is meant to be lived fully, not just observed from the sidelines. Embrace the unknown with curiosity and courage. Adventure awaits those who are brave enough to seek it.",
    category: "Adventure",
  },
  {
    id: 14,
    text: "May this December be the beginning of your greatest chapter yet. You have so much potential within you, waiting to be unleashed. This is your time to level up, to evolve, and to become the best version of yourself. Write a story worth telling, create a legacy worth leaving, and inspire others along the way. Your greatest days are still ahead.",
    category: "New Beginnings",
  },
  {
    id: 15,
    text: "Wishing you December filled with love, laughter, and endless possibilities that make your heart sing. Life is too short not to celebrate it fully. Find joy in small moments, cherish deep connections, and never stop dreaming. Open your heart to all the beauty this world has to offer. Possibilities are infinite for those who believe.",
    category: "Possibilities",
  },
  {
    id: 16,
    text: "May December bring you peace of mind and joy in your heart that radiates outward. In a world of chaos, may you find your calm center. Let peace become your foundation, your strength, and your sanctuary. When your inner peace is unshakeable, nothing can disturb your happiness. Peace is the greatest luxury you can gift yourself.",
    category: "Peace",
  },
  {
    id: 17,
    text: "Wishing you a month where dreams feel closer than ever before and within reach. Your dreams are not just fantasies, they are blueprints of your potential. Start taking steps toward them, no matter how small. Every journey begins with a single step, and every dream begins with a single action. Your dreams matter and deserve your effort.",
    category: "Dreams",
  },
  {
    id: 18,
    text: "May this December be filled with moments you'll treasure forever, memories that warm your heart for years to come. These are the moments that define our lives. Be present, be intentional, and be grateful for every precious second. Take photos, write stories, and hold tight to the people who matter. Memories are the greatest wealth we can accumulate.",
    category: "Memories",
  },
  {
    id: 19,
    text: "Wishing you all the warmth and kindness December can bring, received and given in equal measure. Kindness is the most powerful force in the universe. When you extend kindness to others, you create a ripple effect of goodness that comes back to you multiplied. Be kind to yourself, be kind to others, and watch the world transform. Kindness never goes unnoticed.",
    category: "Kindness",
  },
  {
    id: 20,
    text: "May December remind you how amazing you truly are, inside and out. You have unique gifts and talents that only you possess. Don't diminish your light for anyone. Celebrate yourself, believe in your worth, and let the world see the brilliance that is uniquely you. You are enough exactly as you are right now.",
    category: "Self-Love",
  },
  {
    id: 21,
    text: "Wishing you success in every endeavor you pursue this December and beyond. Success starts with believing you deserve it. Take action with confidence, learn from setbacks, and keep moving forward. Your effort combined with your persistence will create breakthroughs. Success is not a destination, it's a journey of continuous growth and improvement.",
    category: "Success",
  },
  {
    id: 22,
    text: "May this December be a celebration of all you've accomplished, no matter how big or small. Every achievement, every milestone, every moment of growth deserves recognition. You've worked hard and you deserve to feel proud. Acknowledge your efforts, celebrate your victories, and use them as fuel for future success. You are an achiever.",
    category: "Achievement",
  },
  {
    id: 23,
    text: "Wishing you December filled with genuine connections and true friends who uplift you. Real friendship is a treasure beyond measure. Surround yourself with people who see your potential, support your dreams, and make you want to be better. These are the relationships that matter most. Invest in them, cherish them, and let them know how much they mean to you.",
    category: "Friendship",
  },
  {
    id: 24,
    text: "May December bring magic to your everyday moments, transforming the ordinary into the extraordinary. Magic is not something that only happens in stories, it happens in real life to those who look for it. Find wonder in simple things, appreciate beauty in unexpected places, and let your imagination soar. Magic is all around you.",
    category: "Magic",
  },
  {
    id: 25,
    text: "Wishing you a December where your family and friends are your greatest treasure. The love of those closest to you is the greatest gift you could ever receive. Spend quality time with them, listen deeply, and create moments of authentic connection. Family is not just about blood relations, it's about the people who stand by you. Cherish them always.",
    category: "Family",
  },
  {
    id: 26,
    text: "May this December be the turning point toward your greatest dreams and highest potential. Sometimes all it takes is one decision, one moment of courage, to change everything. This could be that moment for you. Believe in the possibility of transformation and take the first step toward your new life. Your breakthrough is waiting.",
    category: "Dreams",
  },
  {
    id: 27,
    text: "Wishing you December filled with laughter that echoes through your soul and touches everyone around you. Laughter is medicine for the body, mind, and spirit. Seek out moments of humor, share joy with others, and don't take life too seriously. When you laugh genuinely and deeply, you tap into pure life force. Laughter is love in action.",
    category: "Joy",
  },
  {
    id: 28,
    text: "May December bring you closer to the person you want to become through growth and self-discovery. Personal growth is a lifelong journey of becoming. Every experience teaches you something valuable. Embrace challenges as opportunities to learn, celebrate your progress, and never stop evolving. You are capable of amazing transformation.",
    category: "Growth",
  },
  {
    id: 29,
    text: "Wishing you a month where every day feels like a blessing, a gift, an opportunity to live fully. Life is precious and fleeting. Don't spend it waiting for the right moment, create the right moment. Live with intention, love with passion, and dream with courage. This is your life, make it extraordinary.",
    category: "Blessings",
  },
  {
    id: 30,
    text: "May this December be filled with hope, love, and infinite possibilities that inspire you forward. Hope is the anchor that keeps us steady in stormy seas. When you maintain hope, you open yourself to miracles. Love is the force that connects us all. Possibilities expand when you choose to believe. You are capable of anything.",
    category: "Hope",
  },
  {
    id: 31,
    text: "Wishing you December filled with purpose, passion, and prosperity flowing abundantly. When you align your life with your purpose, everything falls into place. Pursue what sets your soul on fire, invest in your passions, and watch prosperity follow. Purpose gives life meaning, passion gives it energy, prosperity gives it freedom. You deserve all three.",
    category: "Prosperity",
  },
  {
    id: 32,
    text: "May December remind you that you're capable of achieving anything you set your mind to. Limitations are often self-imposed. When you remove the ceiling from your thinking, you expand your possibilities. Believe in your power, take decisive action, and never underestimate what you can accomplish. You are unstoppable.",
    category: "Motivation",
  },
  {
    id: 33,
    text: "Wishing you all the comfort and joy December can provide to soothe your soul. You deserve to rest, to relax, and to find peace in your own space. Create an environment that nourishes you, surround yourself with things that bring comfort, and allow yourself to receive. Comfort is not a luxury, it's a necessity for your wellbeing.",
    category: "Comfort",
  },
  {
    id: 34,
    text: "May this December be a reflection of your beautiful spirit shining through in everything you do. Your spirit is unique and valuable. Let it express itself fully without apology. When you allow your true self to shine, you inspire others to do the same. Your spirit is a gift to the world.",
    category: "Spirit",
  },
  {
    id: 35,
    text: "Wishing you a month where miracles happen in the most unexpected ways and places. Miracles are real, they happen every day to those who believe. Open yourself to receiving miracles by maintaining faith, gratitude, and positive expectation. Miracles often come disguised as ordinary moments. Stay alert and receptive. Your miracle is on its way.",
    category: "Miracles",
  },
  {
    id: 36,
    text: "May December bring you health, happiness, and harmony in all areas of your life. Health is wealth, protect it fiercely. Happiness is your birthright, claim it fully. Harmony comes from alignment between your thoughts, words, and actions. When these three are in sync, you move through life with grace. You deserve wholeness.",
    category: "Wellness",
  },
  {
    id: 37,
    text: "Wishing you December filled with gratitude for all life's blessings, big and small. Gratitude is the quickest way to abundance. When you appreciate what you have, you attract more to be grateful for. Make a gratitude practice part of your daily ritual. Watch how your perspective shifts and your happiness expands. Gratitude is transformative.",
    category: "Gratitude",
  },
  {
    id: 38,
    text: "May this December be your season of triumph and celebration of your excellence. You have overcome obstacles, learned lessons, and grown stronger. This is your time to claim victory and celebrate yourself fully. Recognize your wins no matter how small and let them build your momentum. You are a champion.",
    category: "Victory",
  },
  {
    id: 39,
    text: "Wishing you all the love and light that December can bring to illuminate your path. You are surrounded by love and light even if you can't always see it. Open your heart to receive it, feel it deeply, and let it transform you. The light within you is brighter than any darkness around you. You are love and light.",
    category: "Light",
  },
  {
    id: 40,
    text: "May December inspire you to reach for your highest dreams and greatest aspirations. Dreams are the seeds of your future reality. Water them with belief, nurture them with action, and watch them grow. Your dreams matter, your voice matters, your existence matters. Reach high and reach far.",
    category: "Inspiration",
  },
  {
    id: 41,
    text: "Wishing you a month where every moment matters and every day counts toward your greater purpose. Life is made up of moments, string them together intentionally. Every choice you make today shapes your tomorrow. Live with awareness, act with intention, and create a life you love. Every day is a gift.",
    category: "Mindfulness",
  },
  {
    id: 42,
    text: "May this December bring you financial abundance and future prosperity that flows easily to you. Abundance is not selfish, it's your natural state when you're aligned with flow. Release scarcity mindset, embrace prosperity consciousness, and allow money to serve your highest good. You deserve to be financially free.",
    category: "Abundance",
  },
  {
    id: 43,
    text: "Wishing you December filled with creativity, courage, and confidence in your abilities. Creativity is your superpower waiting to be unleashed. Courage is choosing to move forward despite fear. Confidence is knowing you are capable and worthy. When these three combine, there's nothing you can't accomplish. Believe in yourself.",
    category: "Confidence",
  },
  {
    id: 44,
    text: "May December be a reminder that you deserve all the good things in life without guilt or shame. You don't need to earn worthiness, you are born worthy. Release beliefs that you're not good enough. Claim your place in the sun and let yourself have nice things. You deserve the best.",
    category: "Self-Worth",
  },
  {
    id: 45,
    text: "Wishing you a month where love conquers all obstacles and transforms everything it touches. Love is the most powerful force in the universe. When you lead with love, compassion, and understanding, you heal relationships and transform situations. Let love be your guide in December and beyond. Love wins.",
    category: "Love",
  },
  {
    id: 46,
    text: "May this December bring you clarity, wisdom, and peace of mind about your path forward. Clarity comes when you quiet the noise and listen to your intuition. Wisdom is knowing what matters most. Peace comes from acceptance and trust. These three together create a strong foundation for your next chapter. Trust your inner guidance.",
    category: "Wisdom",
  },
  {
    id: 47,
    text: "Wishing you December filled with unexpected joy and delightful surprises at every turn. Life loves rewarding those who stay open and optimistic. The universe is conspiring to delight you with wonderful surprises. Keep your sense of wonder alive and be ready to receive the good that's coming. Joy is on its way.",
    category: "Surprises",
  },
  {
    id: 48,
    text: "May December inspire you to be the best version of yourself in thought, word, and action. Self-improvement is not about perfection, it's about progression. Every small step toward being better counts. Show up as your best self for yourself and others. The world needs your best self fully expressed.",
    category: "Self-Improvement",
  },
  {
    id: 49,
    text: "Wishing you all the strength and resilience December can offer to handle whatever comes your way. Strength is not about never falling, it's about always getting back up. You are stronger than you know, more capable than you believe. Whatever challenges you face, you have what it takes to overcome them. You are resilient.",
    category: "Strength",
  },
  {
    id: 50,
    text: "May this December be a celebration of your journey and your dreams coming true. Your journey has shaped you into who you are meant to be. Every experience was valuable, every lesson was necessary, every moment brought you closer to your destiny. Celebrate how far you've come and dream boldly about where you're going. Your best is yet to come.",
    category: "Journey",
  },
  {
    id: 51,
    text: "Wishing you December filled with infinite possibilities and endless joy that lifts your spirit higher. The only limits to what's possible are the ones you believe in. Your potential is limitless when you access your true power. Choose joy even when circumstances challenge you. When you choose positivity, possibilities multiply. You are limitless.",
    category: "Joy",
  },
  {
    id: 52,
    text: "May December bring you closer to your loved ones and your goals simultaneously. Connection and achievement go hand in hand when you involve the people who matter most in your journey. Share your dreams with those who care about you and celebrate your victories together. The best life is one shared with people you love. You deserve both.",
    category: "Connection",
  },
  {
    id: 53,
    text: "May this December be filled with synchronicity and opportunities aligning perfectly. When you're on the right path, the universe removes obstacles and creates openings. Trust in divine timing and keep moving forward with faith. The right opportunities find those who are ready and willing. Miracles are orchestrated by forces greater than you.",
    category: "Synchronicity",
  },
  {
    id: 54,
    text: "May December fill your cup so full that you overflow with blessings to share with others. A full cup gives freely without depleting. Invest in yourself first so you have abundance to give away. When you fill yourself with love, joy, and purpose, you become a beacon that attracts and uplifts others. Fill your cup first.",
    category: "Abundance",
  },
  {
    id: 55,
    text: "Wishing you December where every challenge is met with grace and every victory is celebrated fully. Challenges are not punishments, they're opportunities for growth. Face them with courage and move through them with grace. Every victory, no matter its size, deserves recognition and celebration. You are stronger than every challenge.",
    category: "Resilience",
  },
  {
    id: 56,
    text: "May December bring you alignment between who you are and who you want to become. When your inner and outer worlds align, you experience peace and power. Live authentically, speak your truth, and honor your values. When you're aligned, life flows effortlessly. Alignment is the key to fulfillment.",
    category: "Alignment",
  },
  {
    id: 57,
    text: "Wishing you a month where your gifts are recognized, appreciated, and fully utilized. You have so much to offer the world. Your unique talents, perspective, and energy are valuable and needed. Don't hide your light or diminish your gifts. Share them generously and watch how they multiply and bless others. Your gifts matter.",
    category: "Recognition",
  },
  {
    id: 58,
    text: "Wishing you December where you take moments of self-care and deep nurturing of your being. Self-care is not selfish, it's essential. You cannot pour from an empty cup. Take time to rest, restore, and reconnect with yourself. Your wellbeing is worth protecting and prioritizing. Care for yourself like you would a beloved friend.",
    category: "Self-Care",
  },
  {
    id: 59,
    text: "Wishing you December where fear transforms into faith and doubt becomes determination. Fear only has power when you give it power. Replace fear with faith in yourself and in the universe. When doubt creeps in, replace it with determination and action. You are braver than your fear. You are stronger than your doubt.",
    category: "Courage",
  },
  {
    id: 60,
    text: "May December bring you revolutionary change that upgrades every area of your life. Change is not something to fear, it's something to embrace. You are not stuck, you are evolving. Each month brings new opportunities to reinvent yourself and your life. Revolution starts within you. Embrace change fully.",
    category: "Transformation",
  },
  {
    id: 61,
    text: "Wishing you December where authentic connections feed your soul and nourish your spirit. Surface level relationships drain energy, authentic ones energize it. Seek out people who see you, know you, and love you as you are. Real connection is rare and precious. Guard it fiercely and cultivate it intentionally. Authenticity attracts authenticity.",
    category: "Connection",
  },
  {
    id: 62,
    text: "Wishing you December where abundance flows in all directions and forms. Abundance is not just about money, it's about time, energy, love, opportunities, and more. Open yourself to receiving abundance in all its forms. When you believe you're worthy of it, the universe delivers. Abundance is your birthright.",
    category: "Abundance",
  },
  {
    id: 63,
    text: "Wishing you December where your voice is heard, your ideas are valued, and your presence matters. You have something important to say and contribute. Don't wait for permission to speak up. Your perspective is unique and needed. When you use your voice with integrity, you inspire and empower others. Your voice matters.",
    category: "Voice",
  },
  {
    id: 64,
    text: "Wishing you a month where you're worthy of love, success, happiness, and every good thing. Unworthiness is a lie you've been told or told yourself. Your worthiness is not dependent on your accomplishments or anyone's approval. You are inherently worthy simply by existing. Claim your worth now.",
    category: "Worth",
  },
  {
    id: 65,
    text: "Wishing you December where your intuition guides you toward your highest good at every turn. Your intuition is your internal GPS, trust it. When something feels right, it's usually right. When something feels wrong, it's usually wrong. Quiet your mind, listen to your gut, and follow the signals you receive. Your intuition is never wrong.",
    category: "Intuition",
  },
  {
    id: 66,
    text: "Wishing you December where you overflow with love for yourself and others. Love is the highest frequency. When you love yourself fully, you attract people and experiences that match that self-love. Spread love everywhere you go and watch the world transform around you. Love is everything.",
    category: "Love",
  },
  {
    id: 67,
    text: "Wishing you December where your passion becomes your purpose and your purpose becomes your reality. When you do what you love, work becomes play. Passion is the fuel that drives you forward. Follow your passion and purpose will follow. Your ideal life is built on the foundation of passion and purpose. Find it and live it.",
    category: "Purpose",
  },
  {
    id: 68,
    text: "Wishing you December where you take bold actions toward your dreams despite any fear. Courage is not the absence of fear, it's moving forward with fear. Every person who ever accomplished anything was afraid at some point. Fear is not a sign to stop, it's a sign you're growing. Be brave.",
    category: "Courage",
  },
  {
    id: 69,
    text: "Wishing you a month where you celebrate your uniqueness and embrace all that makes you different. Different is not wrong, different is beautiful. Your quirks and oddities are your superpowers. In trying to fit in, you diminish your shine. Stand proudly in your uniqueness and inspire others to do the same. You are beautifully unique.",
    category: "Uniqueness",
  },
  {
    id: 70,
    text: "Wishing you December where moments take your breath away and remind you why you're alive. Life is full of breathtaking moments if you slow down enough to notice them. Presence is the key to experiencing these moments fully. When you're present, you're alive. Be here now and soak in the beauty.",
    category: "Presence",
  },
  {
    id: 71,
    text: "Wishing you December where you plant seeds for a future greater than your imagination. What you do today determines what you reap tomorrow. Plant seeds of positivity, kindness, growth, and purpose. Water them with consistent effort and watch them grow into a harvest beyond your wildest dreams. You are a gardener of your future.",
    category: "Future",
  },
  {
    id: 72,
    text: "Wishing you December where you have peace with your past and excitement for your future. You cannot change what's behind you but you can learn from it. Release what no longer serves you and embrace what's ahead. Every day is a fresh start, a new opportunity to create something better. Your best days are ahead.",
    category: "Peace",
  },
  {
    id: 73,
    text: "Wishing you a month where your confidence soars and your doubts disappear like morning mist. Confidence is a choice you make every single day. Choose to believe in yourself, your abilities, and your worth. When you act confidently, the world responds to your confidence. Confidence is attractive and magnetic. Be confident.",
    category: "Confidence",
  },
  {
    id: 74,
    text: "Wishing you December where you manifest everything your heart desires. You are a powerful creator with the ability to shape your reality. Your thoughts create your experiences. What you believe becomes your truth. Focus on what you want, not on what you don't want. You are a manifestor of your dreams.",
    category: "Manifestation",
  },
  {
    id: 75,
    text: "Wishing you December filled with people who lift you up, inspire you, and believe in you. The people around you have a huge impact on your life. Choose your circle wisely. Surround yourself with winners, dreamers, and believers. When you're surrounded by excellence, excellence becomes your standard. Your circle defines your future.",
    category: "Community",
  },
  {
    id: 76,
    text: "Wishing you December where failure is not the opposite of success, it's a step toward it. Every successful person has failed multiple times. Failure teaches you what doesn't work so you can find what does. When you fail, you're learning. Embrace failures as feedback, not final verdicts. You are not failing, you're learning.",
    category: "Growth",
  },
  {
    id: 77,
    text: "Wishing you a month where you give yourself permission to rest, recharge, and rejuvenate fully. Rest is not laziness, it's necessary maintenance. Your body and mind need downtime to function optimally. Give yourself permission to pause without guilt. When you rest well, you work better. Rest is productive.",
    category: "Rest",
  },
  {
    id: 78,
    text: "Wishing you December where you receive the gift of presence and fully enjoy each moment. The past is gone, the future hasn't arrived, all you have is now. When you're fully present, you experience life in 4K. Presence is the ultimate luxury. Practice being here now with full consciousness. Now is all there is.",
    category: "Mindfulness",
  },
  {
    id: 79,
    text: "Wishing you December where your financial situation improves and prosperity flows toward you effortlessly. Money loves those who respect it and use it wisely. Invest in yourself, your growth, and others generously. When money flows through your hands with purpose, it multiplies. You deserve financial freedom and abundance.",
    category: "Prosperity",
  },
  {
    id: 80,
    text: "Wishing you December where you attract exactly what you need at exactly the right moment. The universe has perfect timing. What's meant for you will find you. When you're aligned with your purpose, the right people, opportunities, and resources appear. Trust in divine timing. You are exactly where you need to be.",
    category: "Timing",
  },
  {
    id: 81,
    text: "Wishing you December where your dreams feel more real and achievable than ever before. Dreams become reality when you take action toward them. The gap between dreaming and achieving is called work. Start working toward your dreams today. Your dream life is not a fantasy, it's a blueprint waiting to be built. Start building.",
    category: "Dreams",
  },
  {
    id: 82,
    text: "Wishing you December where everything shifts, changes, and elevates to a higher level. Sometimes life needs a big shift to move you where you need to be. Be open to change, embrace the unknown, and trust the process. When you're ready for the next level, the universe will level you up. Your upgrade is coming.",
    category: "Elevation",
  },
  {
    id: 83,
    text: "Wishing you December where gratitude transforms every area of your life. Gratitude is the frequency of abundance. When you're grateful for what you have, you attract more to be grateful for. Make gratitude your default setting. A grateful heart is a magnetic heart. Gratitude changes everything.",
    category: "Gratitude",
  },
  {
    id: 84,
    text: "Wishing you December where you are exactly where you need to be at this point in your journey. There are no coincidences, only divine appointments. Every experience is preparing you for something bigger. Trust the process even when you don't understand it. Your life is unfolding perfectly. You are on the right path.",
    category: "Trust",
  },
  {
    id: 85,
    text: "Wishing you December where you step into your power and claim your throne as creator of your destiny. Your life is not something that happens to you, it's something you create. You have more power than you realize. Use your power consciously and intentionally. You are the author of your life. Write a masterpiece.",
    category: "Power",
  },
  {
    id: 86,
    text: "Wishing you December where you feel truly alive, so beautiful, so magical, and so full of wonder that you experience life with enthusiasm. Every day is a gift wrapped in possibility. Unwrap it fully and experience it completely. When you're truly alive, you're also truly happy. Feel alive.",
    category: "Aliveness",
  },
  {
    id: 87,
    text: "Wishing you December where your health improves, your energy increases, and your vitality shines. Your body is miraculous. When you treat it with respect and honor, it responds with energy and wellness. Invest in your health like your life depends on it, because it does. You deserve to feel amazing in your body.",
    category: "Health",
  },
  {
    id: 88,
    text: "Wishing you December where you have the clarity you need to make the best decisions for your future. When you're confused, it's usually because you're trying to see too far ahead. Focus on the next right step. Clarity comes with action. When you move, the path becomes clear. Take the first step with faith.",
    category: "Clarity",
  },
  {
    id: 89,
    text: "Wishing you December where love in all its forms finds you, embraces you, and celebrates you. You deserve to be loved wildly, completely, and without reservation. Love is your natural state. When you feel unlovable, remember you are worthy of the deepest love. Open your heart and receive all the love coming your way.",
    category: "Love",
  },
  {
    id: 90,
    text: "Wishing you December where everything you've worked for comes to fruition. Your efforts are not in vain. Every step you've taken has brought you closer to your breakthrough. The fruits of your labor are ripening. Your harvest is coming. Keep going just a little bit further.",
    category: "Breakthrough",
  },
  {
    id: 91,
    text: "Wishing you December where you feel completely aligned with your soul's purpose and mission. You are here for a reason. Your life has meaning and purpose. When you align with your soul's purpose, everything clicks into place. Your purpose is worth pursuing. Find it and pursue it with all your heart.",
    category: "Purpose",
  },
  {
    id: 92,
    text: "Wishing you December where you share your abundance with others. Abundance multiplies when shared. When you give generously, you receive generously. The universe rewards those who share their blessings. Share your time, talents, treasure, and truth. Abundance is meant to flow through you.",
    category: "Generosity",
  },
  {
    id: 93,
    text: "Wishing you December where you feel your impact in the world and make a difference. You matter more than you know. Your presence, your words, your actions all have impact. Don't underestimate how much you can influence and inspire others. Your life makes a difference. Live like it matters because it does.",
    category: "Impact",
  },
  {
    id: 94,
    text: "Wishing you December where your life is a masterpiece of beauty in progress. Your life is your art. You are the artist. Create with intention, live with purpose, and make it beautiful. Your life story is being written right now. Make it legendary. You are a masterpiece.",
    category: "Artistry",
  },
  {
    id: 95,
    text: "Wishing you December where you finally believe you're worthy of all the good things you desire. You don't need to earn worthiness. It's not something you achieve, it's something you're born with. Claim your worth now and let it transform how you live. You are worthy exactly as you are. Believe it.",
    category: "Worth",
  },
  {
    id: 96,
    text: "Wishing you December where your faith is stronger than your fears and your hope is bigger than your doubts. Faith is the antidote to fear. When you have faith, fear loses its power. Hope is fuel for the soul. When you have hope, nothing feels impossible. Hold fast to faith and hope.",
    category: "Faith",
  },
  {
    id: 97,
    text: "Wishing you December where unexpected blessings remind you that the universe has your back. You are supported by forces greater than yourself. Help comes from unexpected places. Blessings arrive in mysterious ways. Keep your eyes open for the miracles happening in your life right now. You are blessed beyond measure.",
    category: "Blessings",
  },
  {
    id: 98,
    text: "Wishing you December where you finally believe you're worthy of all the good things you desire. You don't need to earn worthiness. It's not something you achieve, it's something you're born with. Claim your worth now and let it transform how you live. You are worthy exactly as you are. Believe it.",
    category: "Worth",
  },
  {
    id: 99,
    text: "Wishing you December where your life is a masterpiece of beauty in progress. Your life is your art. You are the artist. Create with intention, live with purpose, and make it beautiful. Your life story is being written right now. Make it legendary. You are a masterpiece.",
    category: "Artistry",
  },
  {
    id: 100,
    text: "Wishing you December where the universe orchestrates miracles and blessings for you. The universe is on your side. Trust the process and embrace the journey. You are surrounded by love and support. Miracles are waiting for you. You are blessed.",
    category: "Faith",
  },
  {
    id: 101,
    text: "Wishing you December where you share your love and joy with others. You have the power to uplift and inspire those around you. Spread love wherever you go. Your kindness will make a difference. You are capable of creating a beautiful impact.",
    category: "Love",
  },
  {
    id: 102,
    text: "Wishing you December where you feel truly aligned with your soul's purpose and mission. You are here for a reason. Your life has meaning and purpose. When you align with your soul's purpose, everything clicks into place. Your purpose is worth pursuing. Find it and pursue it with all your heart.",
    category: "Purpose",
  },
]

export default function WishesView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [copied, setCopied] = useState<number | null>(null)
  const [copiedMessage, setCopiedMessage] = useState("")

  const handleCopy = (id: number, text: string) => {
    const fullWish = `${text}\n\nPowered by James Tech Incorporative`
    navigator.clipboard.writeText(fullWish).then(() => {
      setCopied(id)
      setCopiedMessage("Copied to clipboard")
      setTimeout(() => {
        setCopied(null)
        setCopiedMessage("")
      }, 2000)
    })
  }

  const filteredWishes = wishes.filter((wish) => wish.category.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-4 sm:space-y-6 w-full">
      {/* Header */}
      <div className="space-y-3 sm:space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold glow-text">December Wishes 2025</h2>
        <p className="text-sm sm:text-base text-foreground/70">
          Spread love and joy by sharing these beautiful wishes with your loved ones
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search wishes by category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-card border border-border/50 rounded-lg pl-9 sm:pl-11 pr-4 py-2 sm:py-3 text-sm sm:text-base text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 w-full">
        {filteredWishes.map((wish) => (
          <WishCard
            key={wish.id}
            wish={wish}
            isCopied={copied === wish.id}
            onCopy={() => handleCopy(wish.id, wish.text)}
          />
        ))}
      </div>

      {copiedMessage && (
        <div className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg animate-pulse text-sm sm:text-base">
          {copiedMessage}
        </div>
      )}
    </div>
  )
}

interface WishCardProps {
  wish: Wish
  isCopied: boolean
  onCopy: () => void
}

function WishCard({ wish, isCopied, onCopy }: WishCardProps) {
  return (
    <button
      onClick={onCopy}
      className="group text-left w-full h-full bg-card hover:bg-card/80 border border-border/50 hover:border-accent/50 rounded-xl p-4 sm:p-5 md:p-6 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/20 active:scale-95 flex flex-col gap-3 sm:gap-4"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-block text-xs font-semibold px-2 sm:px-3 py-1 rounded-full bg-accent/20 text-accent group-hover:bg-accent/40 transition-colors flex-shrink-0">
          {wish.category}
        </span>
        <div className="flex-shrink-0 p-2 sm:p-3 rounded-lg bg-primary/20 group-hover:bg-primary/40 text-primary transition-all duration-200 opacity-100 group-hover:scale-110">
          {isCopied ? (
            <Check className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
          ) : (
            <Copy className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110" />
          )}
        </div>
      </div>
      <p className="text-foreground/90 leading-relaxed text-sm sm:text-base group-hover:text-foreground transition-colors flex-grow">
        {wish.text}
      </p>
      <p className="text-xs text-foreground/50 italic mt-auto">— ●── by James Tech</p>
    </button>
  )
}
