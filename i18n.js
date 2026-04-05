// AuraMail Internationalization (i18n) Module
// Voice-first Hindi language support for visually impaired users

const I18N = {
    currentLanguage: 'en',

    translations: {
        // =====================================================================
        // ENGLISH
        // =====================================================================
        en: {
            // --- App Identity ---
            appName: 'AuraMail',

            // --- Login / Onboarding ---
            welcomeTitle: 'AuraMail',
            welcomeSubtitle: 'Welcome to your accessible email experience',
            getStarted: 'Get Started',
            getStartedDesc: 'Experience hands-free email management with voice commands',
            signInGoogle: 'Sign in with Google',
            signInGoogleDesc: 'Secure authentication with Google OAuth. You\'ll be redirected to Google\'s login page.',
            voiceTutorial: 'Voice Tutorial',
            voiceTutorialDesc: 'Learn voice commands (5 minutes)',

            // --- Navigation / Navbar ---
            compose: 'Compose',
            settings: 'Settings',
            logout: 'Logout',
            toggleDarkMode: 'Toggle dark mode',
            back: 'Back',
            backToInbox: 'Back to inbox',
            backToDashboard: 'Back to dashboard',
            backToEmailList: 'Back to email list',
            skipToMainContent: 'Skip to main content',

            // --- Email Folders ---
            emailFolders: 'Email Folders',
            inbox: 'Inbox',
            sent: 'Sent',
            drafts: 'Drafts',
            spam: 'Spam',
            trash: 'Trash',

            // --- Email List ---
            searchEmails: 'Search emails',
            refreshEmails: 'Refresh emails',
            noEmails: 'No emails in this folder',
            emailNew: 'New',
            emailSpam: 'Spam',

            // --- Email Reader ---
            from: 'From:',
            to: 'To:',
            date: 'Date:',
            subject: 'Subject:',
            attachments: 'Attachments:',
            reply: 'Reply',
            forward: 'Forward',
            delete: 'Delete',
            readEmailAloud: 'Read Email Aloud',
            pauseReading: 'Pause Reading',
            stopReading: 'Stop Reading',

            // --- Compose ---
            composeEmail: 'Compose Email',
            toLabel: 'To:',
            subjectLabel: 'Subject:',
            messageLabel: 'Message:',
            toPlaceholder: 'Enter recipient email address',
            subjectPlaceholder: 'Enter email subject',
            messagePlaceholder: 'Type your message or use voice dictation',
            toDictateHelp: 'Say "dictate recipient" to use voice input',
            subjectDictateHelp: 'Say "dictate subject" to use voice input',
            messageDictateHelp: 'Say "dictate message" or "start dictating" to compose with voice',
            sendEmail: 'Send Email',
            startDictating: 'Start Dictating',
            saveDraft: 'Save Draft',
            listeningDictation: 'Listening... Say "stop dictating" when done',

            // --- Settings ---
            accessibilitySettings: 'Accessibility Settings',
            textAndDisplay: 'Text & Display',
            fontSize: 'Font Size:',
            highContrastMode: 'High Contrast Mode',
            voiceSettings: 'Voice Settings',
            speechRate: 'Speech Rate:',
            speechVolume: 'Speech Volume:',
            voiceLanguage: 'Voice Language:',
            behaviorSettings: 'Behavior Settings',
            autoReadEmails: 'Auto-read emails when opened',
            voiceConfirmation: 'Voice confirmation for actions',
            testVoice: 'Test Voice Settings',
            resetToDefaults: 'Reset to Defaults',
            normalSpeed: 'Normal',
            langEnglishUS: 'English (US)',
            langEnglishUK: 'English (UK)',
            langSpanish: 'Spanish',
            langFrench: 'French',
            langHindi: 'Hindi',

            // --- Help Modal ---
            voiceCommandsGuide: 'Voice Commands Guide',
            navigationCommands: 'Navigation Commands',
            emailCommands: 'Email Commands',
            compositionCommands: 'Composition Commands',
            systemCommands: 'System Commands',
            startVoiceTour: 'Start Voice Tour',
            close: 'Close',

            // Help - Navigation
            helpReadInbox: '"read inbox" - Go to inbox',
            helpComposeEmail: '"compose email" - Start new email',
            helpShowSettings: '"show settings" - Open settings',
            helpGoBack: '"go back" - Return to previous screen',
            helpHelp: '"help" - Show this guide',

            // Help - Email
            helpReadEmail: '"read email" - Read current email aloud',
            helpReply: '"reply" - Reply to email',
            helpForward: '"forward" - Forward email',
            helpDelete: '"delete" - Delete email',
            helpMarkSpam: '"mark as spam" - Mark as spam',

            // Help - Composition
            helpDictateRecipient: '"dictate recipient" - Voice input for recipient',
            helpDictateSubject: '"dictate subject" - Voice input for subject',
            helpDictateMessage: '"dictate message" - Voice input for message',
            helpStartDictating: '"start dictating" - Begin voice input',
            helpStopDictating: '"stop dictating" - End voice input',
            helpSendEmail: '"send email" - Confirm and send',
            helpConfirmSend: '"confirm send" - Confirm sending',
            helpSaveDraft: '"save draft" - Save as draft with confirmation',
            helpConfirmSave: '"confirm save" - Confirm saving draft',
            helpCancel: '"cancel" - Cancel action',

            // Help - System
            helpRepeat: '"repeat" - Repeat last announcement',
            helpLouder: '"louder" - Increase volume',
            helpQuieter: '"quieter" - Decrease volume',
            helpHighContrast: '"high contrast" - Toggle contrast mode',

            // --- Voice Status Messages (Spoken) ---
            voiceReady: 'Voice commands ready',
            listening: 'Listening for commands...',
            processing: 'Processing command...',
            speaking: 'Speaking...',
            voiceNotSupported: 'Voice recognition not supported',
            voiceFeaturesNotSupported: 'Voice features not supported',
            voiceInitFailed: 'Voice initialization failed',
            micPermissionDenied: 'Microphone permission denied',
            voiceUnavailable: 'Voice recognition unavailable',
            tapMicToSpeak: 'Tap mic to speak',
            clickToActivate: 'Voice commands ready (click to activate)',
            tapToEnableVoice: 'Tap to enable voice',
            voiceEnabled: 'Voice enabled! Tap the mic icon to give voice commands.',
            commandNotRecognized: 'Command not recognized. Say "help" to hear available commands.',

            // --- Spoken Feedback Messages ---
            signedInSuccess: 'Successfully signed in. Loading your inbox.',
            signedInToast: 'Successfully signed in with Google',
            authFailed: 'Authentication failed. Please try again.',
            loadingEmails: 'Loading your emails...',
            welcomeFirstTime: 'Welcome to Voice-Enabled Email System. Starting voice tour to guide you through features.',
            welcomeReturning: 'Welcome to Voice-Enabled Email System. Press the tutorial button to learn voice commands, or sign in with Google to continue.',
            commandExecuted: 'Command executed:',
            commandCancelled: 'Command cancelled.',
            cancelled: 'Cancelled',
            confirmAction: 'Are you sure you want to {action}? Say "yes" to confirm or "no" to cancel.',

            // Folder switching
            switchedToFolder: 'Switched to {folder}. {count} emails found.',
            loadingFolderEmails: 'Loading {folder} emails...',

            // Email reading
            emailOpened: 'Email opened: {subject} {contact}. Say "read email" to have it read aloud.',
            emailFrom: 'Email from {from}.',
            emailSubjectLine: 'Subject: {subject}.',
            receivedOn: 'Received on {date}.',
            messageContent: 'Message content:',
            noContentNote: 'Note: This email contains mostly images or formatting. The readable text content is limited.',
            youHaveEmails: 'You have {count} emails in {folder}.',
            emailNumber: 'Email {number}: {contact}. Subject: {subject}.',
            andMoreEmails: 'And {count} more emails.',
            sayOpenEmail: 'Say "open email" followed by a number to open a specific email.',
            noEmailsInFolder: 'No emails in {folder}.',

            // Compose
            composeScreenOpened: 'Compose email screen opened. Say "dictate recipient" to begin.',
            replyingTo: 'Replying to {from}. Say "dictate message" to compose your reply.',
            forwardingEmail: 'Forwarding email. Say "dictate recipient" to specify who to forward to.',
            emailSentSuccess: 'Email sent successfully!',
            emailSentToast: 'Email sent successfully',
            emailSendFailed: 'Failed to send email. Please try again.',
            draftSaved: 'Draft saved.',
            confirmSendEmail: 'Ready to send email to {to} with subject "{subject}". Say "confirm send" to send, or "cancel" to go back.',
            confirmSaveDraft: 'Say "confirm save" to save draft, or "cancel" to go back.',
            noRecipient: 'Please add a recipient email address first.',
            invalidEmail: 'The email address appears to be invalid. Please check and try again.',

            // Dictation
            dictatingRecipient: 'Dictating recipient. Say the email address.',
            dictatingSubject: 'Dictating subject. Say the email subject.',
            dictatingMessage: 'Dictating message body. Say "stop dictating" when done.',
            dictationStopped: 'Dictation stopped.',
            dictatedRecipient: 'Recipient set to {value}.',
            dictatedSubject: 'Subject set to {value}.',

            // Delete / Spam
            emailDeleted: 'Email deleted.',
            markedAsSpam: 'Email marked as spam.',
            moveToTrash: 'Email moved to trash.',

            // Settings
            voiceLanguageChanged: 'Voice language changed to {lang}. I am now listening and speaking in {lang}.',
            languageSetTo: 'Language set to {lang}',
            settingsReset: 'Settings reset to default values.',
            settingsResetToast: 'Settings reset',
            testVoiceMessage: 'This is a test of your current voice settings. Adjust the sliders to change speed and volume.',

            // Theme
            switchedToMode: 'Switched to {mode} mode',
            darkMode: 'dark',
            lightMode: 'light',

            // Volume / Font
            volumeIncreased: 'Volume increased.',
            volumeDecreased: 'Volume decreased.',
            volumeMax: 'Volume is at maximum.',
            volumeMin: 'Volume is at minimum.',
            fontSizeIncreased: 'Font size increased.',
            confirmLargerTextPrompt: 'Say "confirm larger text" to increase the font size.',

            // High contrast
            highContrastOn: 'High contrast mode enabled.',
            highContrastOff: 'High contrast mode disabled.',

            // Errors
            appInitFailed: 'Application initialization failed',
            commandProcessingFailed: 'Command processing failed',
            openComposeFirst: 'Please open the compose screen first.',
            recipientRequired: 'Please enter a recipient email address.',
            subjectRequired: 'Please enter a subject.',
            messageRequired: 'Please enter a message.',
            unableToConfirm: 'Unable to confirm email.',
            alreadySignedIn: 'You are already signed in.',
            startingSignIn: 'Starting sign in with Google.',
            failedConnectGoogle: 'Failed to connect to Google. Please try again.',
            settingsOpened: 'Settings opened. You can adjust preferences using voice commands or controls.',
            helpUnavailable: 'Help system is not available.',
            helpError: 'Help system encountered an error.',
            failedDeleteEmail: 'Failed to delete email.',
            fillAllFields: 'Please fill in all required fields: recipient, subject, and message.',
            enterValidEmail: 'Please enter a valid email address.',
            noContentToSave: 'No content to save as draft.',
            unableToConfirmDraft: 'Unable to confirm draft.',
            nothingToRepeat: 'Nothing to repeat.',
            loggedOut: 'Logged out successfully. Goodbye!',
            loggedOutToast: 'Logged out successfully',

            // Loading
            processingText: 'Processing...',
            downloadingAttachment: 'Downloading attachment...',
            downloadedFile: 'Downloaded {filename}',
            downloadFailed: 'Failed to download attachment',

            // Timestamps
            today: 'Today',
            yesterday: 'Yesterday',
            daysAgo: '{count} days ago',
            unknownDate: 'Unknown date',

            // Search
            searchPlaceholder: 'Search emails...',
            searchResults: 'Search results for "{query}"',
            noSearchResults: 'No results found for "{query}"',

            // Priority
            priorityUrgent: 'urgent',
            priorityHigh: 'high',
            priorityMedium: 'medium',
            priorityLow: 'low',
            priorityNormal: 'normal',

            // Aria labels
            ariaRead: 'Read',
            ariaUnread: 'Unread',
            ariaHasAttachment: 'Has attachment',
            ariaEmailList: 'Email list',
            ariaMainNav: 'Main navigation',
            ariaEmailFolders: 'Email folders',

            // Voice Tour
            tourWelcome: 'Welcome to the voice tour. I will guide you through all the voice commands.',
            tourNavigation: 'Navigation commands. Say "read inbox" to go to your inbox. Say "compose email" to start writing a new email. Say "show settings" to open settings. Say "go back" to return to the previous screen.',
            tourEmail: 'Email commands. When reading an email, say "read email" to hear it read aloud. Say "reply" to reply. Say "forward" to forward. Say "delete" to delete. Say "mark as spam" to mark as spam.',
            tourCompose: 'Composition commands. Say "dictate recipient" to speak the email address. Say "dictate subject" for the subject. Say "dictate message" or "start dictating" for the message body. Say "stop dictating" when done. Say "send email" to send.',
            tourSystem: 'System commands. Say "repeat" to hear the last message again. Say "louder" or "quieter" to adjust volume. Say "high contrast" to toggle contrast mode. Say "help" anytime to hear all commands.',
            tourLanguage: 'Language commands. Say "speak Hindi" or "change to Hindi" to switch to Hindi. Say "speak English" or "change to English" to switch back.',
            tourComplete: 'Voice tour complete. You can say "help" anytime to hear the commands again. Enjoy using AuraMail!',
        },

        // =====================================================================
        // HINDI (हिन्दी)
        // =====================================================================
        hi: {
            // --- App Identity ---
            appName: 'ऑरामेल',

            // --- Login / Onboarding ---
            welcomeTitle: 'ऑरामेल',
            welcomeSubtitle: 'आपके सुलभ ईमेल अनुभव में आपका स्वागत है',
            getStarted: 'शुरू करें',
            getStartedDesc: 'वॉइस कमांड से हैंड्स-फ़्री ईमेल प्रबंधन का अनुभव करें',
            signInGoogle: 'Google से साइन इन करें',
            signInGoogleDesc: 'Google OAuth के साथ सुरक्षित प्रमाणीकरण। आपको Google के लॉगिन पेज पर भेजा जाएगा।',
            voiceTutorial: 'वॉइस ट्यूटोरियल',
            voiceTutorialDesc: 'वॉइस कमांड सीखें (5 मिनट)',

            // --- Navigation / Navbar ---
            compose: 'लिखें',
            settings: 'सेटिंग्स',
            logout: 'लॉग आउट',
            toggleDarkMode: 'डार्क मोड टॉगल करें',
            back: 'वापस',
            backToInbox: 'इनबॉक्स पर वापस',
            backToDashboard: 'डैशबोर्ड पर वापस',
            backToEmailList: 'ईमेल सूची पर वापस',
            skipToMainContent: 'मुख्य सामग्री पर जाएं',

            // --- Email Folders ---
            emailFolders: 'ईमेल फ़ोल्डर',
            inbox: 'इनबॉक्स',
            sent: 'भेजे गए',
            drafts: 'ड्राफ़्ट',
            spam: 'स्पैम',
            trash: 'ट्रैश',

            // --- Email List ---
            searchEmails: 'ईमेल खोजें',
            refreshEmails: 'ईमेल रिफ़्रेश करें',
            noEmails: 'इस फ़ोल्डर में कोई ईमेल नहीं है',
            emailNew: 'नया',
            emailSpam: 'स्पैम',

            // --- Email Reader ---
            from: 'प्रेषक:',
            to: 'प्राप्तकर्ता:',
            date: 'तारीख:',
            subject: 'विषय:',
            attachments: 'अटैचमेंट:',
            reply: 'जवाब दें',
            forward: 'आगे भेजें',
            delete: 'हटाएं',
            readEmailAloud: 'ईमेल ज़ोर से पढ़ें',
            pauseReading: 'पढ़ना रोकें',
            stopReading: 'पढ़ना बंद करें',

            // --- Compose ---
            composeEmail: 'ईमेल लिखें',
            toLabel: 'प्राप्तकर्ता:',
            subjectLabel: 'विषय:',
            messageLabel: 'संदेश:',
            toPlaceholder: 'प्राप्तकर्ता का ईमेल पता दर्ज करें',
            subjectPlaceholder: 'ईमेल का विषय दर्ज करें',
            messagePlaceholder: 'अपना संदेश टाइप करें या वॉइस डिक्टेशन का उपयोग करें',
            toDictateHelp: 'वॉइस इनपुट के लिए "प्राप्तकर्ता बोलें" कहें',
            subjectDictateHelp: 'वॉइस इनपुट के लिए "विषय बोलें" कहें',
            messageDictateHelp: 'वॉइस से लिखने के लिए "संदेश बोलें" या "बोलना शुरू करें" कहें',
            sendEmail: 'ईमेल भेजें',
            startDictating: 'बोलना शुरू करें',
            saveDraft: 'ड्राफ़्ट सेव करें',
            listeningDictation: 'सुन रहे हैं... काम हो जाए तो "बोलना बंद करें" कहें',

            // --- Settings ---
            accessibilitySettings: 'सुलभता सेटिंग्स',
            textAndDisplay: 'टेक्स्ट और डिस्प्ले',
            fontSize: 'फ़ॉन्ट आकार:',
            highContrastMode: 'हाई कंट्रास्ट मोड',
            voiceSettings: 'वॉइस सेटिंग्स',
            speechRate: 'बोलने की गति:',
            speechVolume: 'बोलने की आवाज़:',
            voiceLanguage: 'भाषा:',
            behaviorSettings: 'व्यवहार सेटिंग्स',
            autoReadEmails: 'ईमेल खोलने पर स्वतः पढ़ें',
            voiceConfirmation: 'कार्यों के लिए वॉइस पुष्टि',
            testVoice: 'वॉइस सेटिंग्स टेस्ट करें',
            resetToDefaults: 'डिफ़ॉल्ट पर रीसेट करें',
            normalSpeed: 'सामान्य',
            langEnglishUS: 'अंग्रेज़ी (यूएस)',
            langEnglishUK: 'अंग्रेज़ी (यूके)',
            langSpanish: 'स्पेनिश',
            langFrench: 'फ़्रेंच',
            langHindi: 'हिन्दी',

            // --- Help Modal ---
            voiceCommandsGuide: 'वॉइस कमांड गाइड',
            navigationCommands: 'नेविगेशन कमांड',
            emailCommands: 'ईमेल कमांड',
            compositionCommands: 'लेखन कमांड',
            systemCommands: 'सिस्टम कमांड',
            startVoiceTour: 'वॉइस टूर शुरू करें',
            close: 'बंद करें',

            // Help - Navigation
            helpReadInbox: '"इनबॉक्स पढ़ें" - इनबॉक्स पर जाएं',
            helpComposeEmail: '"ईमेल लिखो" - नया ईमेल शुरू करें',
            helpShowSettings: '"सेटिंग्स दिखाओ" - सेटिंग्स खोलें',
            helpGoBack: '"वापस जाओ" - पिछली स्क्रीन पर लौटें',
            helpHelp: '"मदद" - यह गाइड दिखाएं',

            // Help - Email
            helpReadEmail: '"ईमेल पढ़ो" - वर्तमान ईमेल ज़ोर से पढ़ें',
            helpReply: '"जवाब दो" - ईमेल का जवाब दें',
            helpForward: '"आगे भेजो" - ईमेल आगे भेजें',
            helpDelete: '"हटाओ" - ईमेल हटाएं',
            helpMarkSpam: '"स्पैम करो" - स्पैम के रूप में चिह्नित करें',

            // Help - Composition
            helpDictateRecipient: '"प्राप्तकर्ता बोलें" - प्राप्तकर्ता के लिए वॉइस इनपुट',
            helpDictateSubject: '"विषय बोलें" - विषय के लिए वॉइस इनपुट',
            helpDictateMessage: '"संदेश बोलें" - संदेश के लिए वॉइस इनपुट',
            helpStartDictating: '"बोलना शुरू करें" - वॉइस इनपुट शुरू करें',
            helpStopDictating: '"बोलना बंद करें" - वॉइस इनपुट बंद करें',
            helpSendEmail: '"ईमेल भेजो" - पुष्टि करके भेजें',
            helpConfirmSend: '"भेजने की पुष्टि" - भेजने की पुष्टि करें',
            helpSaveDraft: '"ड्राफ़्ट सेव करो" - ड्राफ़्ट सेव करें',
            helpConfirmSave: '"सेव की पुष्टि" - सेव की पुष्टि करें',
            helpCancel: '"रद्द करें" - कार्य रद्द करें',

            // Help - System
            helpRepeat: '"दोहराओ" - आखिरी संदेश दोहराएं',
            helpLouder: '"आवाज़ बढ़ाओ" - आवाज़ बढ़ाएं',
            helpQuieter: '"आवाज़ कम करो" - आवाज़ कम करें',
            helpHighContrast: '"हाई कंट्रास्ट" - कंट्रास्ट मोड टॉगल करें',

            // --- Voice Status Messages (Spoken) ---
            voiceReady: 'वॉइस कमांड तैयार हैं',
            listening: 'सुन रहे हैं...',
            processing: 'कमांड प्रोसेस हो रही है...',
            speaking: 'बोल रहे हैं...',
            voiceNotSupported: 'वॉइस पहचान समर्थित नहीं है',
            voiceFeaturesNotSupported: 'वॉइस सुविधाएं समर्थित नहीं हैं',
            voiceInitFailed: 'वॉइस इनिशियलाइज़ेशन विफल',
            micPermissionDenied: 'माइक्रोफ़ोन अनुमति अस्वीकृत',
            voiceUnavailable: 'वॉइस पहचान अनुपलब्ध',
            tapMicToSpeak: 'बोलने के लिए माइक टैप करें',
            clickToActivate: 'वॉइस कमांड तैयार (सक्रिय करने के लिए क्लिक करें)',
            tapToEnableVoice: 'वॉइस सक्षम करने के लिए टैप करें',
            voiceEnabled: 'वॉइस सक्षम! वॉइस कमांड के लिए माइक आइकन टैप करें।',
            commandNotRecognized: 'कमांड पहचान में नहीं आई। उपलब्ध कमांड सुनने के लिए "मदद" कहें।',

            // --- Spoken Feedback Messages ---
            signedInSuccess: 'सफलतापूर्वक साइन इन हो गए। आपका इनबॉक्स लोड हो रहा है।',
            signedInToast: 'Google से सफलतापूर्वक साइन इन',
            authFailed: 'प्रमाणीकरण विफल। कृपया फिर से प्रयास करें।',
            loadingEmails: 'आपके ईमेल लोड हो रहे हैं...',
            welcomeFirstTime: 'वॉइस-सक्षम ईमेल सिस्टम में आपका स्वागत है। सुविधाओं की जानकारी के लिए वॉइस टूर शुरू हो रहा है।',
            welcomeReturning: 'वॉइस-सक्षम ईमेल सिस्टम में आपका स्वागत है। वॉइस कमांड सीखने के लिए ट्यूटोरियल बटन दबाएं, या जारी रखने के लिए Google से साइन इन करें।',
            commandExecuted: 'कमांड चलाई गई:',
            commandCancelled: 'कमांड रद्द।',
            cancelled: 'रद्द',
            confirmAction: 'क्या आप वाकई {action} करना चाहते हैं? पुष्टि के लिए "हाँ" या रद्द करने के लिए "नहीं" कहें।',

            // Folder switching
            switchedToFolder: '{folder} पर स्विच किया गया। {count} ईमेल मिले।',
            loadingFolderEmails: '{folder} के ईमेल लोड हो रहे हैं...',

            // Email reading
            emailOpened: 'ईमेल खुला: {subject} {contact}। ज़ोर से पढ़ने के लिए "ईमेल पढ़ो" कहें।',
            emailFrom: '{from} का ईमेल।',
            emailSubjectLine: 'विषय: {subject}।',
            receivedOn: '{date} को प्राप्त।',
            messageContent: 'संदेश की सामग्री:',
            noContentNote: 'नोट: इस ईमेल में ज़्यादातर चित्र या फ़ॉर्मेटिंग है। पढ़ने योग्य सामग्री सीमित है।',
            youHaveEmails: '{folder} में आपके {count} ईमेल हैं।',
            emailNumber: 'ईमेल {number}: {contact}। विषय: {subject}।',
            andMoreEmails: 'और {count} ईमेल हैं।',
            sayOpenEmail: 'किसी ईमेल को खोलने के लिए "ईमेल खोलो" और उसका नंबर कहें।',
            noEmailsInFolder: '{folder} में कोई ईमेल नहीं।',

            // Compose
            composeScreenOpened: 'ईमेल लिखने की स्क्रीन खुली। शुरू करने के लिए "प्राप्तकर्ता बोलें" कहें।',
            replyingTo: '{from} को जवाब दे रहे हैं। अपना जवाब लिखने के लिए "संदेश बोलें" कहें।',
            forwardingEmail: 'ईमेल आगे भेज रहे हैं। किसे भेजना है बताने के लिए "प्राप्तकर्ता बोलें" कहें।',
            emailSentSuccess: 'ईमेल सफलतापूर्वक भेजा गया!',
            emailSentToast: 'ईमेल सफलतापूर्वक भेजा गया',
            emailSendFailed: 'ईमेल भेजने में विफल। कृपया फिर से प्रयास करें।',
            draftSaved: 'ड्राफ़्ट सेव हो गया।',
            confirmSendEmail: '{to} को विषय "{subject}" के साथ ईमेल भेजने के लिए तैयार। भेजने के लिए "भेजने की पुष्टि" कहें, या वापस जाने के लिए "रद्द करें" कहें।',
            confirmSaveDraft: 'ड्राफ़्ट सेव करने के लिए "सेव की पुष्टि" कहें, या वापस जाने के लिए "रद्द करें" कहें।',
            noRecipient: 'कृपया पहले प्राप्तकर्ता का ईमेल पता जोड़ें।',
            invalidEmail: 'ईमेल पता अमान्य लग रहा है। कृपया जांचकर फिर से प्रयास करें।',

            // Dictation
            dictatingRecipient: 'प्राप्तकर्ता बोलें। ईमेल पता कहें।',
            dictatingSubject: 'विषय बोलें। ईमेल का विषय कहें।',
            dictatingMessage: 'संदेश बोलें। काम हो जाए तो "बोलना बंद करें" कहें।',
            dictationStopped: 'डिक्टेशन बंद।',
            dictatedRecipient: 'प्राप्तकर्ता सेट: {value}।',
            dictatedSubject: 'विषय सेट: {value}।',

            // Delete / Spam
            emailDeleted: 'ईमेल हटाया गया।',
            markedAsSpam: 'ईमेल स्पैम के रूप में चिह्नित।',
            moveToTrash: 'ईमेल ट्रैश में ले जाया गया।',

            // Settings
            voiceLanguageChanged: 'भाषा {lang} में बदल गई। अब मैं {lang} में सुन और बोल रहा हूँ।',
            languageSetTo: 'भाषा {lang} पर सेट',
            settingsReset: 'सेटिंग्स डिफ़ॉल्ट मान पर रीसेट।',
            settingsResetToast: 'सेटिंग्स रीसेट',
            testVoiceMessage: 'यह आपकी वर्तमान वॉइस सेटिंग्स का टेस्ट है। गति और आवाज़ बदलने के लिए स्लाइडर एडजस्ट करें।',

            // Theme
            switchedToMode: '{mode} मोड पर स्विच किया',
            darkMode: 'डार्क',
            lightMode: 'लाइट',

            // Volume / Font
            volumeIncreased: 'आवाज़ बढ़ाई गई।',
            volumeDecreased: 'आवाज़ कम की गई।',
            volumeMax: 'आवाज़ अधिकतम पर है।',
            volumeMin: 'आवाज़ न्यूनतम पर है।',
            fontSizeIncreased: 'फ़ॉन्ट आकार बढ़ाया गया।',
            confirmLargerTextPrompt: 'फ़ॉन्ट आकार बढ़ाने के लिए "बड़ा टेक्स्ट पुष्टि" कहें।',

            // High contrast
            highContrastOn: 'हाई कंट्रास्ट मोड सक्षम।',
            highContrastOff: 'हाई कंट्रास्ट मोड अक्षम।',

            // Errors
            appInitFailed: 'ऐप इनिशियलाइज़ेशन विफल',
            commandProcessingFailed: 'कमांड प्रोसेसिंग विफल',
            openComposeFirst: 'कृपया पहले ईमेल लिखें स्क्रीन खोलें।',
            recipientRequired: 'कृपया प्राप्तकर्ता का ईमेल पता दर्ज करें।',
            subjectRequired: 'कृपया विषय दर्ज करें।',
            messageRequired: 'कृपया संदेश दर्ज करें।',
            unableToConfirm: 'ईमेल की पुष्टि नहीं हो सकी।',
            alreadySignedIn: 'आप पहले से साइन इन हैं।',
            startingSignIn: 'Google से साइन इन शुरू हो रहा है।',
            failedConnectGoogle: 'Google से कनेक्ट करने में विफल। कृपया फिर से प्रयास करें।',
            settingsOpened: 'सेटिंग्स खुली हैं। वॉइस कमांड या कंट्रोल से सेटिंग्स बदलें।',
            helpUnavailable: 'सहायता प्रणाली उपलब्ध नहीं है।',
            helpError: 'सहायता प्रणाली में त्रुटि।',
            failedDeleteEmail: 'ईमेल हटाने में विफल।',
            fillAllFields: 'कृपया सभी आवश्यक फ़ील्ड भरें: प्राप्तकर्ता, विषय, और संदेश।',
            enterValidEmail: 'कृपया एक वैध ईमेल पता दर्ज करें।',
            noContentToSave: 'सेव करने के लिए कोई सामग्री नहीं।',
            unableToConfirmDraft: 'ड्राफ़्ट की पुष्टि नहीं हो सकी।',
            nothingToRepeat: 'दोहराने के लिए कुछ नहीं।',
            loggedOut: 'सफलतापूर्वक लॉग आउट। अलविदा!',
            loggedOutToast: 'सफलतापूर्वक लॉग आउट',

            // Loading
            processingText: 'प्रोसेसिंग...',
            downloadingAttachment: 'अटैचमेंट डाउनलोड हो रहा है...',
            downloadedFile: '{filename} डाउनलोड हो गया',
            downloadFailed: 'अटैचमेंट डाउनलोड विफल',

            // Timestamps
            today: 'आज',
            yesterday: 'कल',
            daysAgo: '{count} दिन पहले',
            unknownDate: 'अज्ञात तारीख',

            // Search
            searchPlaceholder: 'ईमेल खोजें...',
            searchResults: '"{query}" के लिए खोज परिणाम',
            noSearchResults: '"{query}" के लिए कोई परिणाम नहीं',

            // Priority
            priorityUrgent: 'अत्यावश्यक',
            priorityHigh: 'उच्च',
            priorityMedium: 'मध्यम',
            priorityLow: 'कम',
            priorityNormal: 'सामान्य',

            // Aria labels
            ariaRead: 'पढ़ा हुआ',
            ariaUnread: 'अपठित',
            ariaHasAttachment: 'अटैचमेंट है',
            ariaEmailList: 'ईमेल सूची',
            ariaMainNav: 'मुख्य नेविगेशन',
            ariaEmailFolders: 'ईमेल फ़ोल्डर',

            // Voice Tour
            tourWelcome: 'वॉइस टूर में आपका स्वागत है। मैं आपको सभी वॉइस कमांड बताऊंगा।',
            tourNavigation: 'नेविगेशन कमांड। इनबॉक्स पर जाने के लिए "इनबॉक्स पढ़ें" कहें। नया ईमेल लिखने के लिए "ईमेल लिखो" कहें। सेटिंग्स खोलने के लिए "सेटिंग्स दिखाओ" कहें। पिछली स्क्रीन पर जाने के लिए "वापस जाओ" कहें।',
            tourEmail: 'ईमेल कमांड। ईमेल पढ़ते समय, ज़ोर से पढ़ने के लिए "ईमेल पढ़ो" कहें। जवाब देने के लिए "जवाब दो" कहें। आगे भेजने के लिए "आगे भेजो" कहें। हटाने के लिए "हटाओ" कहें। स्पैम के लिए "स्पैम करो" कहें।',
            tourCompose: 'लेखन कमांड। ईमेल पता बोलने के लिए "प्राप्तकर्ता बोलें" कहें। विषय के लिए "विषय बोलें" कहें। संदेश के लिए "संदेश बोलें" या "बोलना शुरू करें" कहें। काम होने पर "बोलना बंद करें" कहें। भेजने के लिए "ईमेल भेजो" कहें।',
            tourSystem: 'सिस्टम कमांड। आखिरी संदेश फिर से सुनने के लिए "दोहराओ" कहें। आवाज़ बढ़ाने या कम करने के लिए "आवाज़ बढ़ाओ" या "आवाज़ कम करो" कहें। कंट्रास्ट मोड के लिए "हाई कंट्रास्ट" कहें। कभी भी कमांड सुनने के लिए "मदद" कहें।',
            tourLanguage: 'भाषा कमांड। अंग्रेज़ी में बदलने के लिए "अंग्रेज़ी में बोलो" कहें।',
            tourComplete: 'वॉइस टूर पूरा हुआ। कभी भी कमांड सुनने के लिए "मदद" कहें। ऑरामेल का आनंद लें!',
        }
    },

    // Get a translation string, with optional template variable substitution
    t(key, vars = {}) {
        const lang = this.currentLanguage;
        let text = this.translations[lang]?.[key] || this.translations['en']?.[key] || key;

        // Replace template variables like {folder}, {count}, etc.
        for (const [varName, value] of Object.entries(vars)) {
            text = text.replace(new RegExp(`\\{${varName}\\}`, 'g'), value);
        }

        return text;
    },

    // Set the current language (uses the first 2 chars of voice language code)
    setLanguage(langCode) {
        const lang = langCode.substring(0, 2);
        this.currentLanguage = this.translations[lang] ? lang : 'en';
        this.applyTranslations();
        return this.currentLanguage;
    },

    // Get current language code
    getLanguage() {
        return this.currentLanguage;
    },

    // Apply translations to all DOM elements with data-i18n attributes
    applyTranslations() {
        // Text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = this.t(key);
            if (translated !== key) {
                el.textContent = translated;
            }
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const translated = this.t(key);
            if (translated !== key) {
                el.placeholder = translated;
            }
        });

        // Aria labels
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const translated = this.t(key);
            if (translated !== key) {
                el.setAttribute('aria-label', translated);
            }
        });

        // Aria describedby text (form help text)
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const translated = this.t(key);
            if (translated !== key) {
                el.title = translated;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage === 'hi' ? 'hi' : 'en';
    }
};

// Make globally accessible
window.I18N = I18N;

// Shortcut function
function t(key, vars) {
    return I18N.t(key, vars);
}
window.t = t;
