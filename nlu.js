// AuraMail Natural Language Understanding (NLU) Engine
// Understands user intent from natural speech in English and Hindi
// No API calls needed — runs entirely client-side for instant response

const NLU = {
    // All supported intents with their action mappings
    intents: {
        // --- Navigation ---
        read_inbox: {
            action: 'readAllEmails',
            patterns: {
                en: [/read\s*(my|the|all)?\s*(inbox|emails?|mail)/i, /check\s*(my)?\s*(inbox|emails?|mail)/i, /show\s*(me)?\s*(my|the)?\s*(inbox|emails?)/i, /open\s*(my)?\s*inbox/i, /what.*(?:new|unread)\s*(?:emails?|mail)/i, /any\s*(?:new)?\s*(?:emails?|mail)/i, /go\s*to\s*inbox/i],
                hi: [/इनबॉक्स\s*(पढ़ो|पढ़ें|दिखाओ|खोलो)/i, /ईमेल\s*(पढ़ो|पढ़ें|दिखाओ)/i, /मेरे?\s*ईमेल\s*(बताओ|सुनाओ|पढ़ो)/i, /नए?\s*ईमेल\s*(हैं|दिखाओ|बताओ)/i, /मेल\s*(पढ़ो|दिखाओ)/i]
            }
        },
        compose_email: {
            action: 'showCompose',
            patterns: {
                en: [/(?:compose|write|create|draft|start|new)\s*(?:a|an|new)?\s*(?:email|mail|message)/i, /send\s*(?:a|an)?\s*(?:new)?\s*(?:email|mail|message)\s*to/i, /i\s*want\s*to\s*(?:write|send|compose)/i, /let\s*me\s*(?:write|compose|send)/i],
                hi: [/(?:नया|नई|एक)?\s*ईमेल\s*(लिखो|लिखें|बनाओ)/i, /(?:मैं|मुझे)?\s*ईमेल\s*(लिखना|भेजना)\s*(है|चाहता|चाहती)/i, /(?:नया|नई)?\s*(?:मेल|संदेश)\s*(लिखो|लिखें)/i]
            }
        },
        show_settings: {
            action: 'showSettings',
            patterns: {
                en: [/(?:show|open|go\s*to)\s*(?:the)?\s*settings/i, /(?:change|adjust|modify)\s*(?:my)?\s*(?:settings|preferences|options)/i, /settings\s*(?:page|menu|screen)/i],
                hi: [/सेटिंग्स?\s*(दिखाओ|खोलो|बदलो)/i, /(?:मेरी)?\s*सेटिंग्स/i]
            }
        },
        go_back: {
            action: 'navigateBack',
            patterns: {
                en: [/go\s*back/i, /go\s*to\s*(?:previous|back|last)/i, /back\s*(?:to|button)/i, /return/i, /previous\s*(?:screen|page)/i],
                hi: [/वापस\s*(जाओ|जाएं|चलो)/i, /पीछे\s*(जाओ|जाएं)/i]
            }
        },
        show_help: {
            action: 'showHelp',
            patterns: {
                en: [/help/i, /what\s*(?:can|commands?)\s*(?:i|you|are)/i, /(?:show|list)\s*(?:me)?\s*(?:all)?\s*commands?/i, /how\s*(?:do|can)\s*i/i, /what\s*(?:should|do)\s*i\s*say/i],
                hi: [/मदद/i, /सहायता/i, /क्या\s*(कमांड|बोल\s*सकता)/i, /कैसे\s*(करें|बोलें)/i]
            }
        },
        logout: {
            action: 'logout',
            patterns: {
                en: [/log\s*out/i, /sign\s*out/i, /exit/i, /leave/i],
                hi: [/लॉग\s*आउट/i, /साइन\s*आउट/i, /बाहर\s*(निकलो|जाओ)/i]
            }
        },
        sign_in: {
            action: 'signInWithVoice',
            patterns: {
                en: [/sign\s*in/i, /log\s*in/i, /login/i],
                hi: [/साइन\s*इन/i, /लॉग?\s*इन/i]
            }
        },

        // --- Folder Navigation ---
        switch_to_sent: {
            action: 'switchFolder',
            params: { folder: 'sent' },
            patterns: {
                en: [/(?:go\s*to|open|show|check|view|switch\s*to)\s*(?:the|my)?\s*sent/i, /sent\s*(?:folder|emails?|mail|items)/i],
                hi: [/भेजे?\s*(?:गए|हुए)\s*(दिखाओ|खोलो|पढ़ो)/i, /सेंट\s*(फ़ोल्डर|ईमेल)/i]
            }
        },
        switch_to_drafts: {
            action: 'switchFolder',
            params: { folder: 'drafts' },
            patterns: {
                en: [/(?:go\s*to|open|show|check|view|switch\s*to)\s*(?:the|my)?\s*drafts?/i, /drafts?\s*(?:folder|emails?)/i],
                hi: [/ड्राफ़?्?ट\s*(दिखाओ|खोलो|पढ़ो)/i]
            }
        },
        switch_to_spam: {
            action: 'switchFolder',
            params: { folder: 'spam' },
            patterns: {
                en: [/(?:go\s*to|open|show|check|view|switch\s*to)\s*(?:the|my)?\s*spam/i, /spam\s*(?:folder|emails?)/i],
                hi: [/स्पैम\s*(दिखाओ|खोलो|पढ़ो)/i]
            }
        },

        // --- Email Actions ---
        read_email: {
            action: 'readCurrentEmail',
            patterns: {
                en: [/read\s*(?:this|the|current|it|aloud|out\s*loud)/i, /read\s*(?:it|this)?\s*(?:to\s*me|aloud|out)/i, /(?:speak|say|tell)\s*(?:me)?\s*(?:this|the)?\s*(?:email|message)/i],
                hi: [/(?:यह|ये|इस)?\s*(?:ईमेल|मेल)\s*(पढ़ो|सुनाओ|बोलो)/i, /ज़ोर\s*से\s*पढ़ो/i]
            }
        },
        open_email_number: {
            action: 'openEmailByNumber',
            extract: 'number',
            patterns: {
                en: [/(?:open|read|show|view)\s*(?:the)?\s*(?:email|mail|message)?\s*(?:number|#|no\.?)?\s*(\d+)/i, /(?:open|read|show)\s*(?:the)?\s*(\w+)\s*(?:email|mail|message|one)/i, /(\w+)\s*(?:email|one|message)\s*(?:please|pls)?$/i],
                hi: [/(?:ईमेल|मेल)?\s*(?:नंबर|नं\.?)?\s*(\d+)\s*(खोलो|पढ़ो|दिखाओ)/i, /(.+?)\s*(?:वाला|वाली|नंबर)?\s*(?:ईमेल|मेल)\s*(खोलो|पढ़ो|दिखाओ)/i, /(?:ईमेल|मेल)\s*(.+?)\s*(खोलो|पढ़ो|दिखाओ)/i]
            }
        },
        reply_email: {
            action: 'replyToEmail',
            patterns: {
                en: [/reply\s*(?:to)?\s*(?:this|the|it)?/i, /respond\s*(?:to)?\s*(?:this|the|it)?/i, /(?:write|send)\s*(?:a)?\s*reply/i, /(?:get\s*back|write\s*back)\s*(?:to)?/i],
                hi: [/(?:इसका|इस\s*ईमेल\s*का)?\s*(?:जवाब|रिप्लाई)\s*(दो|दें|करो)/i, /जवाब\s*(लिखो|भेजो)/i]
            }
        },
        forward_email: {
            action: 'forwardEmail',
            patterns: {
                en: [/forward\s*(?:this|the|it)?/i, /(?:send|share)\s*(?:this)?\s*(?:to\s*someone|along|forward)/i],
                hi: [/(?:इसे|ये|यह)?\s*(?:आगे\s*भेजो|फ़ॉरवर्ड\s*करो)/i]
            }
        },
        delete_email: {
            action: 'deleteCurrentEmail',
            destructive: true,
            patterns: {
                en: [/delete\s*(?:this|the|it|current)?/i, /(?:remove|trash|throw\s*away|get\s*rid\s*of)\s*(?:this|the|it)?/i, /(?:move|send)\s*(?:it|this)?\s*to\s*(?:the)?\s*trash/i],
                hi: [/(?:इसे|ये|यह)?\s*(हटाओ|हटाएं|डिलीट\s*करो)/i, /(?:ट्रैश|कूड़े)\s*में\s*(डालो|भेजो)/i]
            }
        },
        mark_spam: {
            action: 'markAsSpam',
            destructive: true,
            patterns: {
                en: [/(?:mark|flag)\s*(?:as|it|this)?\s*spam/i, /(?:this\s*is|it'?s)\s*spam/i, /spam\s*(?:mark|flag|it|this)/i],
                hi: [/(?:इसे|ये)?\s*स्पैम\s*(करो|मार्क\s*करो|बनाओ)/i, /(?:ये|यह)\s*स्पैम\s*है/i]
            }
        },

        // --- Dictation ---
        start_dictation: {
            action: 'startDictation',
            patterns: {
                en: [/start\s*dictat/i, /begin\s*dictat/i, /(?:i\s*want\s*to|let\s*me)\s*dictate/i, /voice\s*(?:type|input|mode)/i],
                hi: [/बोलना\s*(शुरू\s*करो|शुरू\s*करें)/i, /डिक्टेशन\s*(शुरू\s*करो|चालू\s*करो)/i]
            }
        },
        stop_dictation: {
            action: 'stopDictation',
            patterns: {
                en: [/stop\s*dictat/i, /end\s*dictat/i, /done\s*dictat/i, /finish\s*dictat/i],
                hi: [/बोलना\s*(बंद\s*करो|बंद\s*करें|रोको)/i, /डिक्टेशन\s*(बंद|रोको)/i]
            }
        },
        dictate_recipient: {
            action: 'dictateRecipient',
            patterns: {
                en: [/dictate\s*(?:the)?\s*(?:recipient|to\s*field|email\s*address)/i, /(?:enter|type|set)\s*(?:the)?\s*recipient/i, /who\s*(?:should|to)\s*(?:i\s*send|send)\s*(?:it|this)?\s*to/i],
                hi: [/प्राप्तकर्ता\s*(बोलो|बोलें|बताओ)/i, /किसको?\s*भेजना\s*है/i]
            }
        },
        dictate_subject: {
            action: 'dictateSubject',
            patterns: {
                en: [/dictate\s*(?:the)?\s*subject/i, /(?:enter|type|set)\s*(?:the)?\s*subject/i, /what'?s?\s*(?:the)?\s*subject/i],
                hi: [/विषय\s*(बोलो|बोलें|बताओ|लिखो)/i]
            }
        },
        dictate_message: {
            action: 'dictateMessage',
            patterns: {
                en: [/dictate\s*(?:the)?\s*(?:message|body|content)/i, /(?:enter|type|write)\s*(?:the)?\s*(?:message|body)/i, /(?:i\s*want\s*to|let\s*me)\s*(?:write|type)\s*(?:the)?\s*message/i],
                hi: [/संदेश\s*(बोलो|बोलें|लिखो)/i, /(?:मैं|मुझे)?\s*(?:मैसेज|संदेश)\s*(लिखना|बोलना)\s*है/i]
            }
        },

        // --- Send / Save ---
        send_email: {
            action: 'confirmAndSendEmail',
            patterns: {
                en: [/send\s*(?:this|the|it|my)?\s*(?:email|mail|message)?$/i, /(?:go\s*ahead\s*and\s*)?send\s*it/i, /(?:please|pls)?\s*send/i],
                hi: [/(?:ये|यह|इसे)?\s*(?:ईमेल|मेल)?\s*भेजो/i, /भेज\s*दो/i]
            }
        },
        confirm_send: {
            action: 'sendEmail',
            patterns: {
                en: [/confirm\s*send/i, /yes\s*send/i, /send\s*(?:it|confirm)/i],
                hi: [/भेजने\s*की\s*पुष्टि/i, /भेज\s*दो\s*(?:हाँ|पक्का)/i]
            }
        },
        save_draft: {
            action: 'confirmAndSaveDraft',
            patterns: {
                en: [/save\s*(?:as|it\s*as|this\s*as)?\s*(?:a)?\s*draft/i, /(?:keep|store)\s*(?:this|it)?\s*(?:as)?\s*draft/i],
                hi: [/ड्राफ़?्?ट\s*(सेव\s*करो|बचाओ|रखो)/i]
            }
        },

        // --- Settings / Accessibility ---
        toggle_dark_mode: {
            action: 'toggleDarkMode',
            patterns: {
                en: [/(?:switch|toggle|turn\s*on|turn\s*off|enable|disable)\s*(?:the)?\s*dark\s*mode/i, /(?:switch|change)\s*(?:to)?\s*(?:dark|light|night)\s*(?:mode|theme)/i, /(?:make\s*it|go)\s*dark/i, /(?:make\s*it|go)\s*light/i, /(?:i\s*want|change\s*to)\s*(?:dark|light)\s*(?:mode|theme)/i],
                hi: [/डार्क\s*मोड\s*(चालू|बंद|टॉगल|करो|लगाओ)/i, /(?:अंधेरा|रात)\s*(?:मोड|वाला)/i, /लाइट\s*मोड/i]
            }
        },
        toggle_contrast: {
            action: 'toggleContrast',
            patterns: {
                en: [/(?:high|toggle)\s*contrast/i, /(?:increase|improve)\s*(?:the)?\s*contrast/i],
                hi: [/हाई\s*कंट्रास्ट/i, /कंट्रास्ट\s*(बढ़ाओ|टॉगल)/i]
            }
        },
        increase_volume: {
            action: 'increaseVolume',
            patterns: {
                en: [/(?:increase|raise|turn\s*up|louder|more)\s*(?:the)?\s*(?:volume|sound|voice)/i, /louder/i, /(?:speak|talk)\s*(?:louder|up)/i, /(?:i\s*)?can'?t\s*hear/i, /volume\s*up/i],
                hi: [/आवाज़?\s*(बढ़ाओ|ऊपर\s*करो|और\s*करो)/i, /ज़ोर\s*से\s*बोलो/i, /(?:सुनाई|आवाज़)\s*नहीं/i]
            }
        },
        decrease_volume: {
            action: 'decreaseVolume',
            patterns: {
                en: [/(?:decrease|lower|turn\s*down|quieter|less)\s*(?:the)?\s*(?:volume|sound|voice)/i, /quieter/i, /(?:speak|talk)\s*(?:quieter|softer|down)/i, /(?:too\s*)?loud/i, /volume\s*down/i],
                hi: [/आवाज़?\s*(कम\s*करो|नीचे\s*करो|धीमी\s*करो)/i, /धीरे\s*(?:बोलो|से)/i]
            }
        },
        increase_font: {
            action: 'increaseFontSize',
            patterns: {
                en: [/(?:increase|make|bigger|larger)\s*(?:the)?\s*(?:font|text)\s*(?:size|bigger|larger)?/i, /(?:bigger|larger)\s*(?:font|text)/i, /(?:i\s*)?can'?t\s*(?:read|see)/i],
                hi: [/(?:फ़ॉन्ट|टेक्स्ट|अक्षर)\s*(बड़ा|बड़े)\s*(करो|करें)/i, /बड़ा\s*(?:टेक्स्ट|लिखो)/i, /(?:दिखाई|पढ़)\s*नहीं\s*(?:देता|दे\s*रहा)/i]
            }
        },
        repeat_last: {
            action: 'repeatLastSpoken',
            patterns: {
                en: [/repeat/i, /(?:say|speak|tell)\s*(?:that|it)?\s*again/i, /what\s*(?:did\s*you|was\s*that)/i, /(?:i\s*)?(?:didn'?t|could\s*not)\s*(?:hear|catch|understand)/i, /(?:once\s*)?more/i, /(?:come\s*)?again/i, /pardon/i],
                hi: [/दोहराओ/i, /फिर\s*(?:से)?\s*बोलो/i, /(?:क्या|वो)\s*(?:बोला|कहा)/i, /(?:मुझे|मैंने)?\s*(?:सुनाई|समझ)\s*नहीं/i]
            }
        },

        // --- Language ---
        switch_to_hindi: {
            action: 'switchLanguage',
            params: { langCode: 'hi-IN', langName: 'हिन्दी' },
            patterns: {
                en: [/(?:speak|switch\s*to|change\s*to|use)\s*hindi/i, /hindi\s*(?:language|mode|please)/i],
                hi: [/हिंदी\s*(?:में)?\s*बोलो/i]
            }
        },
        switch_to_english: {
            action: 'switchLanguage',
            params: { langCode: 'en-US', langName: 'English' },
            patterns: {
                en: [/(?:speak|switch\s*to|change\s*to|use)\s*english/i, /english\s*(?:language|mode|please)/i],
                hi: [/अंग्रेज़?ी\s*(?:में)?\s*बोलो/i, /(?:इंग्लिश|अंग्रेज़?ी)\s*(?:में)?\s*(बदलो|करो)/i]
            }
        },

        // --- Refresh ---
        refresh: {
            action: 'refreshEmails',
            patterns: {
                en: [/refresh/i, /(?:reload|update)\s*(?:my|the)?\s*(?:emails?|inbox|mail)/i, /(?:check\s*for|any)\s*new\s*(?:emails?|mail)/i, /sync/i],
                hi: [/रिफ़?्?रेश\s*करो/i, /(?:नए)?\s*ईमेल\s*(लाओ|चेक\s*करो|देखो)/i]
            }
        },
    },

    // Ordinal/number word mapping
    numberWords: {
        en: { first: 1, second: 2, third: 3, fourth: 4, fifth: 5, sixth: 6, seventh: 7, eighth: 8, ninth: 9, tenth: 10, last: -1 },
        hi: { पहला: 1, पहली: 1, दूसरा: 2, दूसरी: 2, तीसरा: 3, तीसरी: 3, चौथा: 4, चौथी: 4, पांचवां: 5, पांचवीं: 5, छठा: 6, सातवां: 7, आठवां: 8, नौवां: 9, दसवां: 10, आखिरी: -1, अंतिम: -1 }
    },

    /**
     * Analyze natural language input and return the best matching intent
     * @param {string} text - User's spoken text
     * @param {string} lang - Language code (e.g., 'en-US', 'hi-IN')
     * @returns {{ intent: string, action: string, params: object, confidence: number } | null}
     */
    understand(text, lang = 'en-US') {
        if (!text || !text.trim()) return null;

        const normalizedText = text.trim().toLowerCase();
        const langPrefix = lang.substring(0, 2); // 'en' or 'hi'
        const searchLangs = langPrefix === 'hi' ? ['hi', 'en'] : ['en', 'hi'];

        let bestMatch = null;
        let bestConfidence = 0;

        for (const [intentName, intentConfig] of Object.entries(this.intents)) {
            for (const searchLang of searchLangs) {
                const patterns = intentConfig.patterns[searchLang] || [];
                for (const pattern of patterns) {
                    const match = normalizedText.match(pattern);
                    if (match) {
                        // Calculate confidence based on match quality
                        const matchLength = match[0].length;
                        const textLength = normalizedText.length;
                        const coverage = matchLength / textLength;
                        // Primary language gets a boost
                        const langBoost = searchLang === searchLangs[0] ? 0.1 : 0;
                        const confidence = Math.min(0.99, 0.7 + (coverage * 0.2) + langBoost);

                        if (confidence > bestConfidence) {
                            bestConfidence = confidence;
                            const params = { ...(intentConfig.params || {}) };

                            // Extract number parameters
                            if (intentConfig.extract === 'number') {
                                const num = this._extractNumber(normalizedText, langPrefix);
                                if (num !== null) {
                                    params.emailNumber = num;
                                }
                            }

                            bestMatch = {
                                intent: intentName,
                                action: intentConfig.action,
                                params: params,
                                confidence: confidence,
                                destructive: intentConfig.destructive || false,
                                matchedText: match[0]
                            };
                        }
                    }
                }
            }
        }

        return bestMatch;
    },

    /**
     * Extract a number from text (digit or word form)
     */
    _extractNumber(text, langPrefix) {
        // Try digit match first
        const digitMatch = text.match(/(\d+)/);
        if (digitMatch) {
            return parseInt(digitMatch[1], 10);
        }

        // Try word-based number
        const words = { ...this.numberWords.en, ...this.numberWords.hi };
        for (const [word, num] of Object.entries(words)) {
            if (text.includes(word)) {
                return num;
            }
        }

        return null;
    }
};

window.NLU = NLU;
