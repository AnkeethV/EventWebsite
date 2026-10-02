# Event Organiser Guide

Welcome to the management guide for your event invitation website! This document will explain how to update event details, manage the guest list, and track RSVPs without touching any complex code.

## 1. Updating Event Details
All details about your event are safely stored in **`src/config/event.ts`**.
To make a change:
1. Open `src/config/event.ts` in your editor.
2. You will see clearly named sections like `date`, `venue`, `schedule`, and `story`.
3. Simply change the text inside the quotes. For example, to change the venue name, update the text next to `name:` under the `venue` block.
4. Save the file. The website will instantly update to reflect your changes!

## 2. Changing Images
Images are stored in the **`public/gallery/`** folder.
1. To add a new image, drag and drop it into the `public/gallery/` folder.
2. To use the new image (for example, as the background hero image), open `src/config/event.ts`.
3. Look for the `image` property in the `venue` block and change it to `"/gallery/your-new-image-name.jpg"`.
4. Save the file.

## 3. Managing RSVPs
You are currently using **Google Forms** to collect RSVPs.
1. The "Fill out RSVP Form" button on the website links directly to your Google Form.
2. To view responses, open your Google Form and click on the "Responses" tab.
3. You can click the "Link to Sheets" (Google Sheets icon) in the top right to instantly export and view all RSVPs in a spreadsheet format, which makes it easy to share with your caterer or event planner!

## 4. Sending Invitations via WhatsApp / Email
When you want to invite a guest, simply share the main website URL with them!

**Template for WhatsApp/Text:**
> "Hi [Name]! We are so excited to celebrate our big day with you. Please visit our wedding website to see all the details and RSVP: [Your Website Link] 💍"

## 5. Publishing to Live (Production)
Your website is ready to be published for the world to see! You can easily host it for free on platforms like **Vercel** or **Netlify**.
1. Push this code to a free GitHub repository.
2. Log into Vercel (vercel.com) and click "Add New Project".
3. Select your GitHub repository.
4. Click "Deploy". Within 2 minutes, your website will be live with a public link!

---
*If you need to make deeper structural changes or change the colors/fonts, please consult a developer to adjust `tailwind.config.ts` and the React component files.*
